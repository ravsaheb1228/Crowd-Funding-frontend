import React from 'react';
import { motion } from 'framer-motion';
import AnimatedContent from './AnimatedContent';
import teamImg from '../assets/team.png';

const missionItems = [
  {
    title: 'Empower Creators',
    text: 'We give innovators the platform they need to showcase their ideas and connect with potential backers worldwide.',
  },
  {
    title: 'Build Communities',
    text: 'We foster connections between creators and supporters, creating communities around shared passions and interests.',
  },
  {
    title: 'Drive Innovation',
    text: 'We believe in the power of ideas to change the world, and we are committed to making innovation accessible to everyone.',
  },
];

const teamMembers = [
  { name: 'Sarah Johnson', title: 'Founder & CEO' },
  { name: 'Michael Chen', title: 'CTO' },
  { name: 'Aisha Patel', title: 'Head of Operations' },
  { name: 'David Kim', title: 'Community Manager' },
];

const AboutSection = () => {
  return (
    <div id="about" className="bg-black text-white scroll-mt-20">

      {/* Our Story */}
      <div className="container mx-auto px-6 py-24 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <AnimatedContent distance={80} direction="horizontal" reverse={false} delay={0}>
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">Our Story</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              FundMyDream was born from a simple observation: great ideas often go unrealized due to lack of financial resources. We believe that innovation should never be limited by funding.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Founded in 2025, our platform connects creative individuals with a community of backers who believe in their vision. We provide the tools, reach, and support to turn dreams into reality.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From tech innovations to artistic endeavors, community projects to small businesses, we've helped thousands of campaigns find the funding they need to succeed.
            </p>
          </AnimatedContent>

          <AnimatedContent distance={80} direction="horizontal" reverse={true} delay={150}>
            <div className="rounded-2xl overflow-hidden border border-gray-800">
              <img src={teamImg} alt="Our team" className="w-full h-64 object-cover" />
            </div>
          </AnimatedContent>

        </div>
      </div>

      {/* Our Mission */}
      <div className="border-t border-gray-900 py-24 bg-[#080808]">
        <div className="container mx-auto px-6 max-w-5xl">
          <AnimatedContent distance={50} direction="vertical" delay={0}>
            <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Our Mission</h2>
          </AnimatedContent>
          <div className="grid md:grid-cols-3 gap-8">
            {missionItems.map((item, i) => (
              <AnimatedContent key={i} distance={60} direction="vertical" delay={i * 150}>
                <div className="bg-[#111] border border-gray-800 p-6 rounded-2xl hover:border-cyan-800 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container mx-auto px-6 py-24 max-w-5xl">
        <AnimatedContent distance={50} direction="vertical" delay={0}>
          <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Meet Our Team</h2>
        </AnimatedContent>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <AnimatedContent key={i} distance={50} direction="vertical" delay={i * 100}>
              <div className="text-center bg-[#111] border border-gray-800 p-6 rounded-2xl hover:border-cyan-800 hover:shadow-md hover:shadow-cyan-900/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-600 to-violet-600 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.title}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AboutSection;
