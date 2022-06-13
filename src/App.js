import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Loading } from "./components";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helper/routes";
import useAuthListener from "./hooks/use-auth-listener";
import { BrowsePage, HomePage, SignInPage, SignUpPage } from "./pages";

export default function App() {
  const { user } = useAuthListener();

  return user ? (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
          path={ROUTES.SIGN_IN}>
          <SignInPage />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
          path={ROUTES.SIGN_UP}>
          <SignUpPage />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
          path={ROUTES.HOME}>
          <HomePage />
        </IsUserRedirect>
        <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
          <BrowsePage />
        </ProtectedRoute>
      </Switch>
    </Router>
  ) : (
    <Loading />
  );
}
