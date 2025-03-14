import React from 'react';

const AboutSection = () => {
  return (
    <div id='about' className="bg-gray-900 text-white min-h-screen">
      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4">
              FundMyDream was born from a simple observation: great ideas often go unrealized due to lack of financial resources. We believe that innovation should never be limited by funding.
            </p>
            <p className="text-gray-300 mb-4">
              Founded in 2025, our platform connects creative individuals with a community of backers who believe in their vision. We provide the tools, reach, and support to turn dreams into reality.
            </p>
            <p className="text-gray-300">
              From tech innovations to artistic endeavors, community projects to small businesses, we've helped thousands of campaigns find the funding they need to succeed.
            </p>
          </div>
          <div className="bg-gray-800 h-64 md:h-auto rounded-lg flex items-center justify-center">
            <div className="text-gray-500 text-lg">
              <img src="client/src/assets/team.jpg" alt="team" />
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Empower Creators', 'Build Communities', 'Drive Innovation'].map((title, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
                <h3 className="text-2xl font-semibold text-cyan-300 mb-3">{title}</h3>
                <p className="text-gray-300">
                  {title === 'Empower Creators'
                    ? 'We give innovators the platform they need to showcase their ideas and connect with potential backers worldwide.'
                    : title === 'Build Communities'
                    ? 'We foster connections between creators and supporters, creating communities around shared passions and interests.'
                    : 'We believe in the power of ideas to change the world, and we are committed to making innovation accessible to everyone.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: "Sarah Johnson", title: "Founder & CEO" },
            { name: "Michael Chen", title: "CTO" },
            { name: "Aisha Patel", title: "Head of Operations" },
            { name: "David Kim", title: "Community Manager" }
          ].map((member, index) => (
            <div key={index} className="text-center bg-gray-800 p-6 rounded-lg hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-2">{member.name}</h3>
              <p className="text-gray-400">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
