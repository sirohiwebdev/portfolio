'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="about-section py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="section-header text-center mb-16">
            <h2 className="section-title text-4xl md:text-5xl font-orbitron font-bold">
              ABOUT
            </h2>
            <div className="title-underline w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-4"></div>
          </div>

          <div className="about-grid grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="about-text">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-block space-y-6"
              >
                <p className="lead-text text-xl font-medium">
                  I&apos;m a passionate <span className="text-accent-primary">Lead Software Engineer</span> who 
                  thrives on building scalable, enterprise-grade solutions that make a real-world impact.
                </p>

                <p className="text-text-secondary">
                  With over <span className="text-accent-gold">5+</span> years in the industry, I&apos;ve evolved from a 
                  full-stack developer to a technical leader specializing in 
                  <span className="text-accent-cyan"> cloud security</span>, 
                  <span className="text-accent-cyan"> distributed systems</span>, and 
                  <span className="text-accent-cyan"> graph database technologies</span>.
                </p>

                <p className="text-text-secondary">
                  Currently, I lead the <span className="text-accent-primary">graph development team at Qualys</span>, 
                  where I&apos;m spearheading the development of the company&apos;s first 
                  <span className="text-accent-secondary"> Graph DB (JanusGraph)</span> based inventory collection 
                  and rule-evaluation engine.
                </p>

                <p className="text-text-secondary">
                  When I&apos;m not coding, you&apos;ll find me on the football field, exploring new technologies, 
                  or learning about business and entrepreneurship. I&apos;m always open to collaborating on exciting 
                  projects and connecting with fellow tech enthusiasts.
                </p>
              </motion.div>
            </div>

            <div className="about-visual">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="profile-card hologram-effect glass-container p-8 rounded-2xl"
              >
                <div className="avatar-container relative mb-8">
                  <div className="aspect-square w-full max-w-[300px] mx-auto relative">
                    <Image
                      src="/profile.jpeg"
                      alt="Abhishek Sirohi"
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="profile-image rounded-xl object-cover object-center"
                      priority
                    />
                    <div className="avatar-glow absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 blur-xl"></div>
                  </div>
                </div>

                <div className="stats-grid grid grid-cols-3 gap-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="stat-item text-center"
                  >
                    <span className="stat-number text-3xl font-bold text-accent-primary" data-count="5">5</span>
                    <span className="stat-label block text-sm text-text-secondary">Years Experience</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="stat-item text-center"
                  >
                    <span className="stat-number text-3xl font-bold text-accent-primary" data-count="50">50</span>
                    <span className="stat-label block text-sm text-text-secondary">Projects Completed</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className="stat-item text-center"
                  >
                    <span className="stat-number text-3xl font-bold text-accent-primary" data-count="15">15</span>
                    <span className="stat-label block text-sm text-text-secondary">Technologies Mastered</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
