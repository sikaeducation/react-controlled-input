import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
const { change } = fireEvent

test("Types in the input", async () => {
  render(<App />);

  const input = screen.getByLabelText(/Username/)
  expect(input.textContent).toBe("")

  change(input, { target: { value: "Hello, world!" }})

  expect(input.value).toBe("Hello, world!")
});
