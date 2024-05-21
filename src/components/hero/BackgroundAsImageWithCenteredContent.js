import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { PrimaryLink as PrimaryLinkBase } from "../headers/light.js";


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


export default () => {
  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <Content>
          <Content /> 
          <Heading>
              Web Developer
              <br />
              Tulsa Oklahoma
          </Heading>
          <PrimaryLink style={{color: "#ecaf1b"}} href="#About">Learn More</PrimaryLink>
          <br />
          <br />
          <p style={{color: "#ecaf1b", fontSize: "12px"}}><a href="https://tylerlaynephotography.shootproof.com/">Photo by Tyler Layne</a></p>
          <br />
          <br /> mk,o
          <br />
          <br />
          <br />
        </Content>
      </HeroContainer>
    </Container>
  );
};
