import React from 'react';
import AnimatedContent from './AnimatedContent'
import { SiWalletconnect } from "react-icons/si";
import { RiContractLine } from "react-icons/ri";
import { RiUserCommunityLine } from "react-icons/ri";
import { CiBookmarkPlus } from "react-icons/ci";
import { VscMultipleWindows } from "react-icons/vsc";
import { FaUserShield } from "react-icons/fa6";

import SmartContractImg from '../assets/SmartContract.png';
import ContractImg from '../assets/Contract.webp';
import Community from '../assets/Community.jpg';
import Campaigns from '../assets/Campaigns.png';
import Security from '../assets/Security.jpg';
import createcampaign from '../assets/createcampaign.png';

const services = [
  {
    title: "Smart Contract Integration",
    description: `Automated and transparent management of crowdfunding campaigns.Secure transactions with Ethereum, ensuring funds are only released when conditions are met.`,
    icon: <RiContractLine />,
    image: ContractImg
  },
  {
    title: "Wallet Connectivity",
    description: `Easy integration with popular wallets like MetaMask for secure transactions.
                  Support for multiple cryptocurrencies to broaden user access.`,
    icon: <SiWalletconnect />,
    image: SmartContractImg
  },
  {
    title: "Community Engagement",
    description: `Options for backers to leave comments and feedback on campaigns.
                  Social sharing tools to promote campaigns across various platforms.`,
    icon: <RiUserCommunityLine />,
    image: Community
  },
  {
    title: "Campaign Creation",
    description: `Simple step-by-step process for launching crowdfunding campaigns.
                  Customizable campaign pages with options for images, descriptions, and funding goals.`,
    icon: <CiBookmarkPlus />,
    image: createcampaign
  },
  {
    title: "Support for Multiple Campaign Types",
    description: `Options for various crowdfunding models (e.g., rewards-based, equity-based).
                  Flexibility for creators to choose the best model for their project.`,
    icon: <VscMultipleWindows />,
    image: Campaigns
  },
  {
    title: "Security and Compliance",
    description: `Robust security measures to protect user data and funds.
                  Compliance with relevant regulations to ensure a trustworthy platform.`,
    icon: <FaUserShield />,
    image: Security
  },
];

const ServicesSection = () => {
  return (
    <section id='services' className="bg-black py-24 text-white scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedContent distance={50} direction="vertical" delay={0}>
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-violet-500">Services</span>
          </h2>
        </AnimatedContent>
        <div className="space-y-20">
          {services.map((service, index) => (
            <AnimatedContent
              key={index}
              distance={100}
              direction="horizontal"
              reverse={index % 2 !== 0}
              delay={0}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
                <div className="flex-1">
                  <div className="text-5xl mb-4 text-violet-400">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden border border-gray-800 shadow-lg shadow-black/40">
                  <img src={service.image} alt={service.title} className="w-full h-60 object-cover" />
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
