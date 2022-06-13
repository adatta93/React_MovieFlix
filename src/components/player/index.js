import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";
import { Container, Overlay, Inner, Button, VideoClose } from "./player";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  const handleClose = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    //console.log(e.target, e.currentTarget);
    if (e.target === e.currentTarget) {
      setShowPlayer(false);
    }
  };
  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay {...restProps} onClick={handleClose} data-testid="player">
          <Inner>
            <video id="movieflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <VideoClose
              onClick={() => setShowPlayer(false)}
              data-testid="playerClose">
              <img src="/images/icons/close.png" alt="Close" />
            </VideoClose>
            {/* <Close /> */}
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { setShowPlayer } = useContext(PlayerContext);
  return (
    <Button {...restProps} onClick={() => setShowPlayer((prev) => !prev)}>
      Play
    </Button>
  );
};
