import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

// Mock function to simulate the form submission
const mockSubmit = jest.fn();

describe("Add Property", () => {
  it("renders correctly", () => {
    render(<AddProperty />);
  });

  it("fires form submission correctly", async () => {
    const { getByLabelText, getByText } = render(
      <AddProperty onSubmit={mockSubmit} />
    );
    const titleInput = getByLabelText("Title");
    const cityInput = getByLabelText("City");
    const typeInput = getByLabelText("Type");
    const bedroomsInput = getByLabelText("Bedrooms");
    const bathroomsInput = getByLabelText("Bathrooms");
    const priceInput = getByLabelText("Price £");
    const emailInput = getByLabelText("Email:");

    fireEvent.change(titleInput, { target: { value: "Test input" } });
    fireEvent.change(cityInput, { target: { value: "Manchester" } });
    fireEvent.change(typeInput, { target: { value: "Bungalow" } });
    fireEvent.change(bedroomsInput, { target: { value: "2" } });
    fireEvent.change(bathroomsInput, { target: { value: "1" } });
    fireEvent.change(priceInput, { target: { value: "111111" } });
    fireEvent.change(emailInput, { target: { value: "test.email@gmail.com" } });

    const submitButton = getByText("Add");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        title: "Test input",
        city: "Manchester",
        type: "Bungalow",
        bedrooms: 2,
        bathrooms: 1,
        price: 111111,
        email: "test.email@gmail.com",
      });
      const successMessage = getByText("Property Added");
      expect(successMessage).toBeInTheDocument();
    });
  });

  xit("rejects an improperly filled form", () => {
    // You can write test cases for form validation here
  });
});
