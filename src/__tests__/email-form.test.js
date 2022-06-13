import React from "react";
import { render } from "@testing-library/react";
import { EmailForm } from "../components";

describe("EmailForm", () => {
  it("renders EmailForm with data", () => {
    const { container, getByText, getByPlaceholderText } = render(
      <EmailForm>
        <EmailForm.Input placeholder="Email address" />
        <EmailForm.Button>Try it now</EmailForm.Button>
        <EmailForm.Break />
        <EmailForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </EmailForm.Text>
      </EmailForm>
    );

    expect(getByText("Try it now")).toBeTruthy();
    expect(
      getByText(
        "Ready to watch? Enter your email to create or restart your membership."
      )
    ).toBeTruthy();
    expect(getByPlaceholderText("Email address")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
