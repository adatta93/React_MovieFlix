import React from "react";
import { render, fireEvent, prettyDOM } from "@testing-library/react";
import { Accordion } from "../components";
import faqData from "../fixtures/faqs.json";

describe("Accordion", () => {
  it("renders Accordion component with populated data", () => {
    const { container, getByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqData.map((faq) => (
          <Accordion.Item key={faq.id}>
            <Accordion.Header>{faq.header}</Accordion.Header>
            <Accordion.Body>{faq.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );

    expect(getByText("Frequently Asked Questions")).toBeTruthy();
    expect(getByText("What is MovieFlix?")).toBeTruthy();
    expect(getByText("How much does MovieFlix cost?")).toBeTruthy();
    expect(getByText("Where can I watch?")).toBeTruthy();
    expect(getByText("How do I cancel?")).toBeTruthy();
    expect(getByText("What can I watch on MovieFlix?")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
