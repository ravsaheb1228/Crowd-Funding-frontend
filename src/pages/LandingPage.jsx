import React from 'react';
import Nav from '../components/Nav';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import AboutSection from '../components/AboutSection';

const LandingPage = () => {
  return (
    <div className="bg-black text-white">
      <Nav />
      {/* HeroSection is h-screen and centers its content, no extra padding needed */}
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <footer className="text-center text-gray-500 py-6 bg-black border-t border-gray-900 text-sm">
        © 2025 CrowdFund. All Rights Reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
