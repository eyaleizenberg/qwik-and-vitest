import { createDOM } from "@builder.io/qwik/testing";
import { test, expect } from "vitest";
import Header from "./header";

test("should have the Tutorials link", async () => {
  const { screen, render } = await createDOM();
  await render(<Header />);
  const link = screen.querySelector(".tuto") as HTMLElement;
  expect(link.textContent).toContain("Tutorials");
});
