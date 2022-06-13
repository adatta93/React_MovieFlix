import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  ButtonLink,
  Container,
  Highlight,
  HighlightCallOut,
  Logo,
  PlayButton,
  TextLink,
  Picture,
  Group,
  Dropdown,
  Profile,
  Text,
  Search,
  SearchInput,
  SearchIcon,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background {...restProps} data-testid="header-bg">
      {children}
    </Background>
  ) : (
    children
  );
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ to, children, ...restProps }) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};

Header.Highlight = function HeaderHighlight({ children, ...restProps }) {
  return <Highlight {...restProps}>{children}</Highlight>;
};

Header.HighlightCallOut = function HeadeHighlightCallOut({
  children,
  ...restProps
}) {
  return <HighlightCallOut {...restProps}>{children}</HighlightCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture src={src} {...restProps} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((prevState) => !prevState)}
        data-testid="search-click">
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};
