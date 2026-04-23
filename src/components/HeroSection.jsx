import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import GradientText from './GradientText';
import StarBorder from './StarBorder';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
});

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">

      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
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
      <section className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">

        <motion.div {...fadeUp(0)}>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-transparent"
          >
            Empower Your Ideas
          </GradientText>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg max-w-2xl text-gray-300 leading-relaxed"
          {...fadeUp(0.2)}
        >
          Join our decentralized crowdfunding platform where creativity meets innovation.
          Create campaigns, gather support, and bring your dreams to life with secure blockchain technology.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="flex gap-4 flex-wrap justify-center">
          <StarBorder
            as="button"
            className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] shadow-inner shadow-black hover:scale-105 transition-transform duration-300"
            color="cyan"
            speed="5s"
          >
            <button
              onClick={() => navigate('/login')}
              className="text-white font-epilogue text-lg px-2"
            >
              Get Started
            </button>
          </StarBorder>

          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-gray-400 hover:text-white border border-gray-700 hover:border-gray-400 rounded-2xl px-6 py-3 text-sm transition-all duration-300"
          >
            Learn More ↓
          </button>
        </motion.div>

      </section>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="w-0.5 h-8 bg-gradient-to-b from-transparent to-gray-500 rounded"
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

    </div>
  );
};

export default HeroSection;
