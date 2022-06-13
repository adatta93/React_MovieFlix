import React, { createContext, useContext, useState } from "react";
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Item,
  Meta,
  Entities,
  Image,
  FeatureContent,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
} from "./styles/card";

export const CardFeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showCardFeature, setShowCardFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  return (
    <CardFeatureContext.Provider
      value={{
        showCardFeature,
        setShowCardFeature,
        itemFeature,
        setItemFeature,
      }}>
      <Container {...restProps}>{children}</Container>
    </CardFeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Feature = function CardFeatuer({ category, children, ...restProps }) {
  const { showCardFeature, itemFeature, setShowCardFeature } = useContext(
    CardFeatureContext
  );
  return showCardFeature ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
      <FeatureContent>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowCardFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>
        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold" textTransform="capitalize">
            {itemFeature.genre}
          </FeatureText>
        </Group>
        {children}
      </FeatureContent>
    </Feature>
  ) : null;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowCardFeature, setItemFeature } = useContext(CardFeatureContext);
  return (
    <Item
      onClick={() => {
        setShowCardFeature(true);
        setItemFeature(item);
      }}
      {...restProps}>
      {children}
    </Item>
  );
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};
