import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("Property Card", () => {
  test("renders the PropertyCard component", () => {
    const validProps = {
      title: "2 bed city center",
      city: "Manchester",
      type: "Flat",
      bedrooms: 2,
      bathrooms: 2,
      price: 500000,
      email: "john.smith@gmail.com",
    };
    const { asFragment } = render(<PropertyCard props={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
