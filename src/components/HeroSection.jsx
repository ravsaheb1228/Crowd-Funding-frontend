import React from 'react'
import { useNavigate } from 'react-router-dom';
import ParticleBackground from './ParticleBackground'
import GradientText from './GradientText'
import StarBorder from './StarBorder'
import { useAuth0 } from "@auth0/auth0-react";

const HeroSection = () => {
  const { loginWithRedirect } = useAuth0();


  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      {/* Particle Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ParticleBackground
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground Content */}
      <section className="relative text-center p-8">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-7xl font-bold bg-transparent p-2"
        >
          Empower Your Ideas
        </GradientText>
        <p className="text-lg max-w-2xl mb-8 animate-fadeIn delay-200 text-white">
          Join our decentralized crowdfunding platform where creativity meets innovation.
          Create campaigns, gather support, and bring your dreams to life with secure blockchain technology.
        </p>
        <StarBorder
          as="button"
          className="custom-class bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] shadow-inner shadow-black hover:scale-105 transition-transform duration-300 text-lg text-white"
          color="cyan"
          speed="5s"
        >
          <button
            onClick={() => loginWithRedirect()}
            className='text-white font-epilogue'
          >
            Get start
          </button>
        </StarBorder>
      </section>
    </div>
  )
}

export default HeroSection
