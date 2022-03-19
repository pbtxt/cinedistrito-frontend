import * as React from "react";

import {
  HeaderContainer,
  CinemaName,
  HeaderItemContainer,
  HeaderItemsContainer,
  // @ts-ignore
} from "./styles.ts";

declare interface HeaderProps {
  items: { name: string; url: string }[];
}

const Header = ({ items }: HeaderProps): JSX.Element => {
  return (
    <HeaderContainer>
      <CinemaName>Cinedistrito</CinemaName>
      <HeaderItemsContainer>
        {items &&
          items.map((item, index) => {
            return (
              <HeaderItemContainer key={index}>
                <a href={item.url}>{item.name}</a>
              </HeaderItemContainer>
            );
          })}
      </HeaderItemsContainer>
    </HeaderContainer>
  );
};

export default Header;
