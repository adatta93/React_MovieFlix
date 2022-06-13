import React from "react";
import { render } from "@testing-library/react";
import { HomePage } from "../pages";

jest.mock("react-router-dom");

test("renders the homepage", () => {
  const { getByText, getAllByText, getAllByPlaceholderText } = render(
    <HomePage />
  );
  expect(getByText("Unlimited movies, TV shows and more.")).toBeTruthy();
  expect(getByText("Watch anywhere. Cancel anytime.")).toBeTruthy();
  expect(getAllByPlaceholderText("Email address")).toBeTruthy();
  expect(getAllByText("Get Started")).toBeTruthy();
  expect(
    getAllByText(
      "Ready to watch? Enter your email to create or restart your membership."
    )
  ).toBeTruthy();
});
