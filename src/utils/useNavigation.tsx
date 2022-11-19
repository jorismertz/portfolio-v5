import { createEffect, createSignal } from "solid-js";

export const [currentPage, setCurrentPage] = createSignal(0);
const maxPage = 1;

function nextPage() {
  if (currentPage() < maxPage) setCurrentPage(currentPage() + 1);
}

function previousPage() {
  if (currentPage() > 0) setCurrentPage(currentPage() - 1);
}

export default function useNavigation() {
  createEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key == "ArrowDown") {
        nextPage();
      }
      if (e.key == "ArrowUp") {
        setCurrentPage(currentPage() - 1);
      }
    });
    window.addEventListener("wheel", (e: any) => {
      const { wheelDelta } = e;
      if (wheelDelta < 0) nextPage();
      else previousPage();
    });
  });
}
