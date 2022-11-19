import { MousePosition } from "~/components/MousePosition";
import { useScreenSize } from "~/components/ScreenSize";

import { Motion, Presence } from "@motionone/solid";
import { createSignal, Show } from "solid-js";

import Home from "~/components/pages/Home";

import useNavigation from "~/utils/useNavigation";

export default function App() {
  useScreenSize();
  useNavigation();
  return (
    <MousePosition>
      <Home />
    </MousePosition>
  );
}
