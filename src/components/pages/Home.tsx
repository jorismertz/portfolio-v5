import WordSoup from "../WordSoup";
import { currentPage, setCurrentPage } from "~/utils/useNavigation";
import { Motion, Presence } from "@motionone/solid";
import { Show } from "solid-js";

export default function Home() {
  return (
    <section class="w-full h-full absolute inset-0 overflow-hidden">
      <WordSoup />
      <div class="inset-0 absolute w-full h-full grid place-items-center">
        <Presence>
          <Show when={currentPage() == 0}>
            <Motion.main
              class="bg-cranberry-50 flex flex-row flex-nowrap"
              initial={{
                transform: `translateY(-100%)`,
                filter: "blur(2rem)",
                opacity: 0,
              }}
              animate={{
                transform: `translateY(0%)`,
                filter: "blur(0rem)",
                opacity: 1,
              }}
              exit={{
                transform: `translateY(-100%)`,
                filter: "blur(2rem)",
                opacity: 0,
              }}
              transition={{
                duration: 0.6,
                easing: "ease",
              }}
            >
              <img class="w-52" src="/images/foto.jpg" alt="" />
              <section class="p-8">
                <h1 class="text-2xl text-cranberry-600">
                  Hi, my name is Joris
                </h1>
                <h1 onClick={() => setCurrentPage(1)}>Ga naar andere pagina</h1>
              </section>
            </Motion.main>
          </Show>
        </Presence>
      </div>
    </section>
  );
}
