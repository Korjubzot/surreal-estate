import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../components/App";

it("renders App component", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("Surreal Estate")).toBeInTheDocument();
  expect(screen.getByTestId("navbar")).toBeInTheDocument();
});
