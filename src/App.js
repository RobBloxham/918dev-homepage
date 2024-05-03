import React, {useEffect} from "react";
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
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-na1.hs-scripts.com/46051784.js";
    document.body.appendChild(script);
  }, []);
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