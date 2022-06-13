import React from "react";
import BrowseContainer from "../containers/browse-container";
import useContent from "../hooks/use-content";
import genreFilter from "../utils/genre-filter";

export default function BrowsePage() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = genreFilter({ series, films });

  return <BrowseContainer slides={slides} />;
}
