import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import FooterContainer from "../containers/footer-container";
import HeaderContainer from "../containers/header-container";
import { FirebaseContext } from "../context/firebase";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const isInvalid = pwd === "" || email === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("E", email);
    console.log("PWD", pwd);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pwd)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((err) => {
        console.log(err);
        setEmail("");
        setPwd("");
        if (err.code !== "auth/internal-error") {
          setError(err.message);
        } else {
          setError("Failed to Sign In");
        }
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit}>
            <Form.Input
              placeholder="Email or phone number"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
            <Form.Submit disabled={isInvalid}>Sign In</Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix?{" "}
            <Form.Link to={ROUTES.SIGN_UP}>Sign up now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
