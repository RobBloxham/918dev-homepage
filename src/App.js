import React from "react";
import "style.css";
import "tailwindcss/lib/css/preflight.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import About from "components/cards/ThreeColContactDetails.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import Footer from "components/footers/FiveColumnWithBackground";
import HubspotContactForm from "components/ContactForm/ContactForm";

function App() {
  return (
    <AnimationRevealPage>
      <Hero />
      <About />
      <Features />
      <Testimonial />
      <HubspotContactForm />      
      <Footer />
    </AnimationRevealPage>
  );
}

export default App;