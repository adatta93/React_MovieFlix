import React from "react";
import { render } from "@testing-library/react";
import { Footer } from "../components";

describe("Footer", () => {
  it("renders the Footer with data", () => {
    const { container, getByText } = render(
      <Footer>
        <Footer.Title>Questions? Call 000-100-200-1234</Footer.Title>
        <Footer.Break />
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#">FAQ</Footer.Link>
            <Footer.Link href="#">Investor Releations</Footer.Link>
            <Footer.Link href="#">Privacy</Footer.Link>
            <Footer.Link href="#">Speed Test</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Help Centre</Footer.Link>
            <Footer.Link href="#">Jobs</Footer.Link>
            <Footer.Link href="#">Cookie Preferences</Footer.Link>
            <Footer.Link href="#">Legal Notices</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Account</Footer.Link>
            <Footer.Link href="#">Ways to Watch</Footer.Link>
            <Footer.Link href="#">Corporate Information</Footer.Link>
            <Footer.Link href="#">MovieFlix Originals</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Media Centre</Footer.Link>
            <Footer.Link href="#">Terms of Use</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Break />
        <Footer.Text>MovieFlix India</Footer.Text>
      </Footer>
    );

    expect(getByText("Questions? Call 000-100-200-1234")).toBeTruthy();
    expect(getByText("FAQ")).toBeTruthy();
    expect(getByText("Help Centre")).toBeTruthy();
    expect(getByText("Account")).toBeTruthy();
    expect(getByText("Media Centre")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
