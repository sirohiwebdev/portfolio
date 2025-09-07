'use client';

import { motion } from 'framer-motion';
import { FaAward, FaTrophy, FaUserTie } from 'react-icons/fa';

interface Achievement {
  title: string;
  items: string[];
}

const achievements: Record<string, Achievement> = {
  professional: {
    title: 'Professional Achievements',
    items: [
      'Released the first-ever Graph DB based inventory system at Qualys, processing billions of cloud assets',
      'Led a team of 5+ engineers in developing cutting-edge cloud security solutions',
      'Improved system performance metrics by 40-60% across multiple projects',
      'Recognized for technical leadership and innovation in cloud security domain',
    ],
  },
  academic: {
    title: 'Academic & Personal Achievements',
    items: [
      'Awarded "Most Dynamic Student" in college for leadership and technical contributions',
      'Scored perfect CGPA of 10/10 in 10th board examinations',
      'Won Inter-college Football Tournament consecutively in 2019 and 2020',
      'Led technical teams and events as Assistant Coordinator at Unnat Technical Club',
    ],
  },
  leadership: {
    title: 'Leadership Roles',
    items: [
      'Assistant Coordinator - Unnat Technical Club, RECK (Jan 2018 - Jun 2020)',
      'Technical Secretary - Abhyutthan 2018 (Annual Techno-cultural fest)',
      'Team Captain - College Football Team (2019-2020)',
    ],
  },
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl font-orbitron font-bold">
            LEADERSHIP & ACHIEVEMENTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-4"></div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Professional Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-container p-8 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaTrophy className="text-4xl text-accent-gold" />
              <h3 className="text-2xl font-orbitron font-semibold text-accent-primary">
                Professional
              </h3>
            </div>
            <ul className="space-y-4">
              {achievements.professional.items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <span className="text-accent-primary mt-1">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Academic & Personal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-container p-8 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaAward className="text-4xl text-accent-cyan" />
              <h3 className="text-2xl font-orbitron font-semibold text-accent-primary">Academic</h3>
            </div>
            <ul className="space-y-4">
              {achievements.academic.items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <span className="text-accent-primary mt-1">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Leadership Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-container p-8 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaUserTie className="text-4xl text-accent-tertiary" />
              <h3 className="text-2xl font-orbitron font-semibold text-accent-primary">
                Leadership
              </h3>
            </div>
            <ul className="space-y-4">
              {achievements.leadership.items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <span className="text-accent-primary mt-1">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
