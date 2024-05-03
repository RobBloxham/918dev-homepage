import React from "react";
import "style.css";
import "tailwindcss/lib/css/preflight.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/FiveColumnWithBackground";

function App() {
  return (
    <AnimationRevealPage>
      <Hero />
      <Features />
      <Blog />
      <Testimonial />
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
}

export default App;