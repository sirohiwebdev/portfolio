'use client';

import { motion } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { HiOfficeBuilding } from 'react-icons/hi';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  category: "Key Responsibilities" | "Key Achievements" | "Key Contributions";
  description: string[];
  technologies: string[];
  additionalInfo?: string;
}

const experiences: Experience[] = [
  {
    title: "Lead Software Engineer",
    company: "Qualys",
    period: "June 2025 - Present",
    location: "Pune, Maharashtra",
    category: "Key Responsibilities",
    description: [
      "Spearheading the graph development team to deliver Qualys' first Graph DB (JanusGraph) based inventory collection and rule-evaluation engine",
      "Leading the architecture and development of distributed cloud security platform processing billions of assets",
      "Pioneering scalable solutions using Kafka, Redis, Kubernetes, and Node.js for enterprise customers",
      "Driving innovation in attack path analysis and real-time security insights",
      "Managing cross-functional teams and establishing technical leadership practices"
    ],
    technologies: ["JanusGraph", "Apache Kafka", "Redis", "Kubernetes", "Node.js", "AWS", "GCP", "Oracle DB"]
  },
  {
    title: "Senior Software Engineer",
    company: "Qualys",
    period: "June 2023 - June 2025",
    location: "Pune, Maharashtra",
    category: "Key Achievements",
    description: [
      "Designed & developed performance-enhancing features for QFlow module, improving platform efficiency by 40%",
      "Developed No Code - Low Code platform using Node-RED for cloud resource scanning and attack path generation",
      "Led code review initiatives and productivity programs, mentoring junior developers",
      "Built event-driven workflow orchestration systems reducing manual operations by 60%",
      "Established best practices for distributed system development"
    ],
    technologies: ["Node-RED", "React", "Node.js", "Kafka", "AWS", "Docker", "Event-Driven Architecture"]
  },
  {
    title: "Software Engineer",
    company: "Qualys",
    period: "August 2021 - May 2023",
    location: "Pune, Maharashtra",
    category: "Key Contributions",
    description: [
      "Built full-stack solutions in Cloud Security domain, tackling complex automation and compliance challenges",
      "Designed event-based trigger systems empowering Qualys Scan for enterprise customers",
      "Improved system performance and throughput by 50% through optimization and monitoring",
      "Enhanced fault tolerance capabilities, reducing downtime and improving reliability",
      "Developed monitoring dashboards for continuous system health tracking"
    ],
    technologies: ["React", "Node.js", "AWS", "JavaScript", "TypeScript", "Cloud APIs"]
  },
  {
    title: "Software Developer",
    company: "Kandor Soft Labs (TotalCloud Inc.)",
    period: "August 2020 - August 2021",
    location: "Bengaluru, Karnataka",
    category: "Key Responsibilities",
    description: [
      "Full-stack developer on TotalCloud platform, focusing on product design and user experience",
      "Enhanced user experience and platform functionality",
      "Contributed to platform architecture that formed foundation of Qualys TotalCloud suite",
      "Worked with serverless architecture and NoSQL databases"
    ],
    technologies: ["React", "Node.js", "AWS", "Serverless", "DynamoDB", "JavaScript"],
    additionalInfo: "Acquired by Qualys"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-bg-primary relative">
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
            PROFESSIONAL JOURNEY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-4"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-accent-primary/20"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            >
              <div className={`glass-container p-8 rounded-xl ${
                index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
              }`}>
                <div className="flex items-start gap-3 mb-4">
                  <div className="shrink-0 mt-1">
                    <HiOfficeBuilding className="text-2xl text-accent-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-orbitron font-semibold text-accent-primary">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-accent-secondary mt-2">{exp.company}</h4>
                    
                    <div className="flex flex-wrap gap-4 mt-2 text-text-secondary text-sm">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {exp.additionalInfo && (
                      <div className="text-accent-gold mt-2 italic">
                        {exp.additionalInfo}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h5 className="text-accent-secondary font-semibold mb-3">{exp.category}:</h5>
                  <ul className="text-text-secondary space-y-3">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent-primary shrink-0 mt-1.5">•</span>
                        <span className="flex-grow">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-primary rounded-full">
                <div className="absolute w-8 h-8 bg-accent-primary/20 rounded-full -left-2 -top-2 animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
