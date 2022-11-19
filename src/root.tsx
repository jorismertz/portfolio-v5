// @refresh reload
import { createSignal, Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

import { currentPage } from "./utils/useNavigation";
const pageBackgroundColors = ["bg-cranberry-500", "bg-cranberry-600"];

export const [backgroundColor, setBackgroundColor] = createSignal<
  string | null
>(null);

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Joris Mertz</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class={pageBackgroundColors[currentPage()]}>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
