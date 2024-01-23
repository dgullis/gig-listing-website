import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Gig from "../src/components/Gig";

test("renders withy initial value of false", () => {
    render(<Gig />);
    expect(screen.getByTestId("favourite")).toHaveTextContent("favourite")
})

test("renders with new value unfavourite", async () => {
    render(<Gig />)

    await userEvent.click(screen.getByText("favourite"));
    expect(screen.getByTestId("favourite")).toHaveTextContent("unfavourite");



    
})