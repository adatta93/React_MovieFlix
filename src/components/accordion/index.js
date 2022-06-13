import React, { createContext, useContext, useState } from "react";
import {
  Body,
  Container,
  Header,
  Inner,
  Item,
  Title,
} from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
}

Accordion.Container = function AccordionContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow((prevVal) => !prevVal)} {...restProps}>
      {children}
      <img
        src="/images/icons/add.png"
        alt="Open"
        className={toggleShow ? "open" : "closed"}
      />
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return (
    <Body className={toggleShow ? "open" : "closed"} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};
