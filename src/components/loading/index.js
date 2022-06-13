import React from "react";
import { LockBody, Picture, ReleaseBody, Spinner } from "./styles/loading";

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      {src ? (
        <Picture src={`/images/users/${src}.png`} data-testid="loading-pic" />
      ) : null}
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
