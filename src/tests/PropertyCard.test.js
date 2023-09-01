import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("Property Card", () => {
  test("renders the PropertyCard component", () => {
    render(<PropertyCard />);

    expect(screen.getByText("2 bed city center")).toBeInTheDocument();
    expect(screen.getByText("Flat - Manchester")).toBeInTheDocument();
    expect(screen.getByText("2 bedrooms")).toBeInTheDocument();
    expect(screen.getByText("2 bathrooms")).toBeInTheDocument();
    expect(screen.getByText("£500000")).toBeInTheDocument();

    const contactLink = screen.getByText("Contact");
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "mailto:john.smith@gmail.com");
  });
});
