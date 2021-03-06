import React, { useContext, useEffect, useState } from "react";
import { Card, Header, Loading, Player } from "../components";
import FooterContainer from "../containers/footer-container";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import logo from "../logo.svg";
import SelectProfileContainer from "./profile-container";
import Fuse from "fuse.js";

export default function BrowseContainer({ slides }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("series");
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    console.log("p", profile);
    setTimeout(() => setLoading(false), 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    if (slideRows.length > 0) {
      const fuse = new Fuse(slideRows, {
        keys: ["data.description", "data.title", "data.genre"],
        threshold: 0.1,
      });
      const results = fuse.search(searchTerm).map(({ item }) => item);
      console.log("Fuse Res ", results);
      if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
        setSlideRows(results);
      } else {
        setSlideRows(slides[category]);
      }
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={profile.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Container>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="MovieFlix" />
            <Header.TextLink
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}>
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}>
              Movies
            </Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <Header.Profile>
              <Header.Picture src={profile.photoURL} />

              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={profile.photoURL} />
                  <Header.TextLink>{profile.displayName}</Header.TextLink>
                </Header.Group>

                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Container>

        <Header.Highlight>
          <Header.HighlightCallOut>Watch Joker Now</Header.HighlightCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears 2
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Highlight>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>

      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
