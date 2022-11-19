import { createEffect, createSignal } from "solid-js";
import {
  generateWordList,
  generateColoredPositions,
  generateShifts,
} from "~/utils/displayWords";

import { currentMousePosition } from "./MousePosition";
import { currentScreenSize, useScreenSize } from "./ScreenSize";

import { Motion, Presence } from "@motionone/solid";
import { Show } from "solid-js";

import { currentPage } from "~/utils/useNavigation";

const DisplayedWords = [
  "creative",
  "design",
  "development",
  "branding",
  "websites",
];

interface MeatballProps {
  content: string;
  highlighted: boolean;
}

const Meatball = ({ content, highlighted }: MeatballProps) => {
  return (
    <h1
      class={`text-[min(17vw,20vh)] ${
        highlighted ? "text-cranberry-600" : "text-cranberry-600/40"
      }`}
    >
      {content}
    </h1>
  );
};

const WordSoup = () => {
  const rowAmount = 6;

  const words = generateWordList(rowAmount, DisplayedWords);
  const positions = generateColoredPositions(rowAmount, DisplayedWords.length);
  const shifts = generateShifts(rowAmount);
  useScreenSize();

  let [xShift, setXShift] = createSignal<number>(0);
  let [yShift, setYShift] = createSignal<number>(0);

  createEffect(() => {
    setXShift(
      ((currentMousePosition().x / currentScreenSize().x) * 100 - 50) / 8
    );
    setYShift(
      ((currentMousePosition().y / currentScreenSize().y) * 100 - 50) / 8
    );
  });

  return (
    <section
      style={{
        transform: `skewY(${yShift()}deg)`,
      }}
      class="relative"
    >
      {words.map((row, index) => (
        <Presence>
          <Show when={currentPage() == 0}>
            <Motion.div
              initial={{
                transform: `translateX(${index % 2 == 0 ? "200%" : "-200%"})`,
                opacity: 0,
              }}
              animate={{
                transform:
                  index % 2 == 0
                    ? `translateX(-${shifts[index] - xShift()}%)`
                    : `translateX(-${shifts[index] - xShift() * -1}%)`,
                opacity: 1,
              }}
              exit={{
                transform: `translateX(${index % 2 == 0 ? "200%" : "-200%"})`,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
            >
              <section
                class="flex flex-row flex-nowrap w-full gap-12 relative leading-[14rem]"
                style={{
                  transform:
                    index % 2 == 0
                      ? `translateX(-${shifts[index] - xShift()}%)`
                      : `translateX(-${shifts[index] - xShift() * -1}%)`,
                }}
              >
                {row.map((word, i) => (
                  <Meatball highlighted={positions[index][i]} content={word} />
                ))}
              </section>
            </Motion.div>
          </Show>
        </Presence>
      ))}
    </section>
  );
};

export default WordSoup;
