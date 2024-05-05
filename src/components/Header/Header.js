import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import  "./Header.css";

const StyledHeader = styled(Header)`
  ${tw`pt-2 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-tulsa hover:border-tulsa hover:text-tulsa`}
  }
  ${NavToggle}.closed {
    ${tw`text-tulsa hover:text-tulsa`}
  }
`;

export default () => {
    const navLinks = [
      <NavLinks key={1}>
        <NavLink href="#About">
          About
        </NavLink>
        <NavLink href="#Packages">
          Offerings
        </NavLink>
        <NavLink href="#Customers">
          Customers
        </NavLink>
        <NavLink></NavLink>
        <NavLink></NavLink>
      </NavLinks>,
      <NavLinks key={2}>
        <NavLink href="#Contact">
          Contact Us
        </NavLink>
      </NavLinks>
    ];
  return (
    <div class="sticky">  
    <StyledHeader links={navLinks} />
    </div>
  )
}