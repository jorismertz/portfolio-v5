import { createEffect, createSignal, JSX } from "solid-js";

interface Props {
  children: JSX.Element;
}

interface ScreenSizeType {
  x: number;
  y: number;
}

const initalValue: ScreenSizeType = { x: 0, y: 0 };

export const [currentScreenSize, setCurrentScreenSize] =
  createSignal<ScreenSizeType>(initalValue);

export const useScreenSize = () => {
  createEffect(() => {
    setCurrentScreenSize({ x: window.innerWidth, y: window.innerHeight });
    window.addEventListener("resize", (e: any) => {
      const { innerHeight: y, innerWidth: x } = e.target;
      setCurrentScreenSize({ x: innerWidth, y: innerHeight });
    });
  });
};
