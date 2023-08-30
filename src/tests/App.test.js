import React, { render, screen } from "@testing-library/react";
import App from "../components/App";

xtest("renders learn react link", () => {
  render(<App />);
  const headerElement = screen.getByText(/Surreal Estate/i);
  expect(headerElement).toBeInTheDocument();
});
