import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/News Monkey - Top General Headlines/i);
  expect(linkElement).toBeInTheDocument();
});
