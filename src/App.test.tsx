import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders click button", () => {
  render(<App />);
  const buttonElement = screen.getByText(/click/i);
  expect(buttonElement).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("header have default background image", () => {
  render(<App />);

  expect(screen.getByRole("banner")).toHaveStyle("background: url(cats.jpg)");
});

test("change background image after clicking the button", async () => {
  render(<App />);

  expect(screen.getByRole("banner")).toHaveStyle("background: url(cats.jpg)");

  const button = screen.getByRole("button");
  await fireEvent.click(button);

  expect(screen.getByRole("banner")).not.toHaveStyle("background: url(cats.jpg)");
});
