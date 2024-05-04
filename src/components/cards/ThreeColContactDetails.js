import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ 
    cards = null, 
    heading = "About Me", 
    subheading = "", 
    description = "I am a passionate Full-Stack Web Developer located in Tulsa Oklahoma with over 15 years of experience in tech. The one constant thing about the tech industry is change. You can count on the fact that, as a life long learner, I will continue to stay up to date with the ever changing landscape of web development. Below is a small portion of the technology I use and why you should have your website custom built.",  
  }) => {
  const defaultCards = [
    {
      title: "Frontend",
      description: "HTML, JavaScript, JQuerry, TypeScript, React"
    },
    { 
      title: "Styling & Design",
      description: "CSS, Figma, Bootstrap, Tailwind CSS, Styled-Components, Twin Macro"
    },
    { 
      title: "Backend",
      description: "Node, Express, Sanity, MongoDB, SQL, AWS."
    },
    { 
      title: "Support, Updates, & Maintenance",
      description: "One point of contact for continued care of your website."
    },
    { 
      title: "Responsive",
      description: "Your website is going to look just as great on a laptop or desktop computer as it is on a tablet or mobile phone."
    },
    { 
      title: "Custom Built",
      description: "Built to your sepcifications without the limitations of a website builder or template."
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container id="About">
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description} </Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
