import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-tulsa hover:border-tulsa hover:text-tulsa`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url(https://i.ibb.co/4KspWRM/Screenshot-2024-05-04-160800.png);
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

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
      <PrimaryLink href="#Contact">
        Contact Us
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Content /> 
          <Heading>
              Web Developer
              <br />
              Tulsa Oklahoma
          </Heading>
          <PrimaryLink style={{color: "#c71a2a"}} href="#About">Learn More</PrimaryLink>
          <br />
          <br />
          <br />
          <p style={{color: "#ecaf1b", fontSize: "12px"}}><a href="https://tylerlaynephotography.shootproof.com/">Photo by Tyler Layne</a></p>
        </Content>
      </HeroContainer>
    </Container>
  );
};
