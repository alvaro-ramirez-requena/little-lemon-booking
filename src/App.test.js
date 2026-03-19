import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders booking title", () => {
  render(<App />);
  const title = screen.getByText(/Little Lemon Booking/i);
  expect(title).toBeInTheDocument();
});
