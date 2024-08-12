import { render, screen } from "@testing-library/react";
import ContextApp from "@/app/ctx-app/page.tsx";

import '@testing-library/jest-dom'

test("My first test", () => {
  expect(2 + 2).toBe(4);
});

test("Check App title is correct", () => {
  const { getByTestId } = render(<ContextApp />);

  const title = getByTestId("app-title").textContent;

  expect(title).toBe("TODOS APP WITH CONTEXT");
});


