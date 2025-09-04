'use client';

import { motion } from 'framer-motion';

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: {
    grade?: string;
    coursework?: string[];
    projects?: string;
  };
}

const educationData: Education[] = [
  {
    degree: "Bachelor of Technology - Computer Science & Engineering",
    institution: "Rajkiya Engineering College Kannauj",
    location: "Kannauj, Uttar Pradesh",
    period: "August 2016 - June 2020",
    details: {
      grade: "CGPA: 7.2/10.0",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Computer Networks",
        "Software Engineering",
        "Operating Systems"
      ],
      projects: "Multiple academic projects involving web development, database design, and system programming"
    }
  },
  {
    degree: "Higher Secondary (10+2) - Science",
    institution: "Meerut Public School",
    location: "Meerut, Uttar Pradesh",
    period: "April 2014 - March 2015",
    details: {
      grade: "Percentage: 91.3%",
      coursework: ["Physics", "Chemistry", "Mathematics", "English"]
    }
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-bg-secondary">
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
            EDUCATION
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-4"></div>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-accent-primary/20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-primary"></div>
              </div>

              {/* Content */}
              <div className="glass-container p-8 rounded-xl">
                <h3 className="text-2xl font-orbitron font-semibold text-accent-primary mb-2">
                  {edu.degree}
                </h3>
                <div className="text-accent-secondary mb-4">
                  {edu.institution} | {edu.period}
                </div>
                <div className="text-text-secondary mb-2">
                  {edu.location}
                </div>

                {edu.details.grade && (
                  <div className="text-accent-gold font-semibold mb-4">
                    {edu.details.grade}
                  </div>
                )}

                {edu.details.coursework && (
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-accent-secondary mb-3">
                      Relevant Coursework:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {edu.details.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg text-sm font-medium transition-all hover:bg-accent-primary/20"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {edu.details.projects && (
                  <div>
                    <h4 className="text-lg font-semibold text-accent-secondary mb-2">
                      Projects:
                    </h4>
                    <p className="text-text-secondary">
                      {edu.details.projects}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
