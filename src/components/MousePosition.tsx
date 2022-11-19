import { createSignal, JSX } from "solid-js";

interface Props {
  children: JSX.Element;
}

interface MousePos {
  x: number;
  y: number;
}

const initalValue: MousePos = { x: 0, y: 0 };

export const [currentMousePosition, setCurrentMousePosition] =
  createSignal<MousePos>(initalValue);

export const MousePosition = ({ children }) => {
  function cursorEventHandler(event: MouseEvent) {
    setCurrentMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <div class="mouse-movement-wrapper" onmousemove={cursorEventHandler}>
      {children}
    </div>
  );
};
