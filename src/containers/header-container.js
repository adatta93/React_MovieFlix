import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Container>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="MovieFlix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Container>
      {children}
    </Header>
  );
}
