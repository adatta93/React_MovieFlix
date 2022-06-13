import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import FooterContainer from "../containers/footer-container";
import HeaderContainer from "../containers/header-container";
import { FirebaseContext } from "../context/firebase";

export default function SignUpPage() {
  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const isInvalid = fName === "" || pwd === "" || email === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fName);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pwd)
      .then((res) => {
        console.log(res);
        res.user
          .updateProfile({
            displayName: fName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then((res) => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((err) => {
        console.log(err);
        setFName("");
        setEmail("");
        setPwd("");
        if (err.code !== "auth/internal-error") {
          setError(err.message);
        } else {
          setError("Failed to Sing Up");
        }
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit}>
            <Form.Input
              placeholder="First Name"
              type="text"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
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
            <Form.Submit disabled={isInvalid}>Sign Up</Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign In</Form.Link>
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
