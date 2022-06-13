import React from "react";
import { Header, Profiles } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export default function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Container>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="MovieFlix" />
        </Header.Container>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                photoURL: user.photoURL,
                displayName: user.displayName,
              })
            }
            data-testid="user-profile">
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
