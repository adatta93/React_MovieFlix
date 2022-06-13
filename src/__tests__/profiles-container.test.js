import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SelectProfileContainer from "../containers/profile-container";

jest.mock("react-router-dom");

describe("Profiles-Container", () => {
  it("renders the Profiles-Container", () => {
    const user = { displayName: "Karl", photoURL: "profile.png" };
    const setProfile = jest.fn();
    const { getByTestId } = render(
      <SelectProfileContainer user={user} setProfile={setProfile} />
    );

    fireEvent.click(getByTestId("user-profile"));
    expect(setProfile).toHaveBeenCalled();
  });
});
