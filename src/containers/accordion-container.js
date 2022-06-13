import React from "react";
import { Accordion, EmailForm } from "../components";
import faqData from "../fixtures/faqs.json";

export default function AccordionContainer() {
  return (
    <>
      <Accordion.Container>
        <Accordion>
          <Accordion.Title>Frequently Asked Questions</Accordion.Title>
          {faqData.map((faq) => (
            <Accordion.Item key={faq.id}>
              <Accordion.Header>{faq.header}</Accordion.Header>
              <Accordion.Body>{faq.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <EmailForm>
          <EmailForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </EmailForm.Text>
          <EmailForm.Break />
          <EmailForm.Input placeholder="Email address" />
          <EmailForm.Button>Get Started</EmailForm.Button>
        </EmailForm>
      </Accordion.Container>
    </>
  );
}
