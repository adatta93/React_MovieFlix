import React from "react";
import { render } from "@testing-library/react";
import { Profiles } from "../components";

describe("Profiles", () => {
  it("renders the Profiles with data", () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture
              src="/images/karl.png"
              data-testid="profile-picture"
            />
            <Profiles.Name>Karl</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId("profile-picture")).toBeTruthy();
    expect(getByText("Karl"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the Profiles with data but no image", () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture data-testid="profile-picture-miss" />
            <Profiles.Name>Karl</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId("profile-picture-miss")).toBeTruthy();
    expect(getByText("Karl"));
    expect(container.firstChild).toMatchSnapshot();
  });
});
