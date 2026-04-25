import React from "react";
import Navbar from "./navbar";
import HeroSection from "./hero-section";
import CardSection from "./card-section";
import FeatureCourse from "./feature-course";
import AdSection from "./ad-section";
import Footer from "./footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 pb-5">
        <HeroSection />
        <CardSection />
        <FeatureCourse />
        <AdSection />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
