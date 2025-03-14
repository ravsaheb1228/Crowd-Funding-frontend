// src/pages/LandingPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import AboutSection from '@/components/AboutSection';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white md:p-5">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <HeroSection/>

      {/* Services Section */}
      <ServicesSection/>

      {/* About Us Section */}
      <AboutSection/>

      {/* Contact Section */}
      <ContactSection/>

      {/* Footer */}
      <footer className="text-center text-white py-6 bg-black">
        © 2025 YourCrowdFundApp. All Rights Reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
