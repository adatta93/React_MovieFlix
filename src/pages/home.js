import React from "react";
import { Feature } from "../components";
import EmailForm from "../components/email-form";
import AccordionContainer from "../containers/accordion-container";
import FooterContainer from "../containers/footer-container";
import HeaderContainer from "../containers/header-container";
import JumbotronContainer from "../containers/jumbotron-container";

export default function HomePage() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <EmailForm>
            <EmailForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </EmailForm.Text>
            <EmailForm.Break />
            <EmailForm.Input placeholder="Email address" />
            <EmailForm.Button>Get Started</EmailForm.Button>
          </EmailForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}
