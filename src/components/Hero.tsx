'use client';

import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import ParticleBackground from './ParticleBackground';
import TypewriterText from './TypewriterText';

const Hero = () => {
  return (
    <section className="hero-section relative h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="hero-background absolute inset-0 bg-gradient-to-br from-bg-primary to-bg-secondary">
        <div className="absolute inset-0 w-full h-full">
          <ParticleBackground />
        </div>
        <div className="grid-overlay absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      
      <div className="hero-content container mx-auto px-4 relative z-10 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex-1 flex flex-col justify-center"
        >
          {/* Glitch Text Effect */}
          <div className="glitch-text">
            <motion.h1 
              className="hero-title font-hero text-[clamp(3rem,8vw,6rem)] font-black tracking-[-0.02em] mb-6"
              style={{
                textShadow: '0 0 20px rgba(0, 255, 133, 0.5)',
                animation: 'titlePulse 3s ease-in-out infinite'
              }}
            >
              ABHISHEK SIROHI
            </motion.h1>
          </div>
          
          {/* Role Animation */}
          <div className="role-animated font-mono text-xl md:text-2xl text-text-primary mb-8">
            <TypewriterText 
              text="Building Next-Gen Cloud Security | Graph Systems Architect | Distributed Systems Expert"
              delay={50}
              className="typewriter"
            />
          </div>

          {/* Hero Description */}
          <motion.p 
            className="hero-description text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Pioneering the future of cloud security with 
            <span className="text-accent-primary"> JanusGraph </span> 
            and 
            <span className="text-accent-primary"> distributed systems</span>. 
            Currently leading innovation at 
            <span className="text-accent-cyan"> Qualys</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="cta-buttons flex flex-col sm:flex-row justify-center gap-6 mb-12"
          >
            <a
              href="#projects"
              className="btn-primary flex items-center justify-center gap-2 px-6 py-3 rounded-full text-bg-primary font-medium group hover:scale-105"
            >
              <MdWork className="text-xl group-hover:rotate-12 transition-transform" />
              View Projects
            </a>
            <a
              href="/Abhishek-Sirohi-Resume-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-accent-primary text-accent-primary font-medium hover:bg-accent-primary/10 transition-all hover:scale-105"
            >
              <FaDownload className="text-xl group-hover:translate-y-1 transition-transform" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/sirohiwebdev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link group"
            >
              <FaGithub className="text-2xl text-text-secondary group-hover:text-accent-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/sirohiwebdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link group"
            >
              <FaLinkedin className="text-2xl text-text-secondary group-hover:text-accent-primary transition-colors" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 will-change-transform"
          >
            <div className="w-6 h-10 rounded-full border-2 border-text-secondary p-1">
              <div className="w-1.5 h-1.5 bg-text-secondary rounded-full mx-auto animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
