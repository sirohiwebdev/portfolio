'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Technology {
  name: string;
  category: string;
}

interface Project {
  title: string;
  role: string;
  description: string;
  keyFeatures: string[];
  technologies: Technology[];
  impact: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'Cloud Graph Inventory Management Platform',
    role: 'Lead Developer & Architect',
    description:
      'Revolutionary distributed low-code/no-code platform that transforms how enterprises manage and visualize their cloud security posture. Built using Node-RED for visual programming, the system powers inventory data ingestion into a JanusGraph-backed system.',
    keyFeatures: [
      'Real-time inventory collection from AWS, GCP, and Azure cloud environments',
      'Attack path visualization using advanced graph algorithms and security policies',
      'Natural language querying through MCP (Model Context Protocol) servers',
      'Automated security rule evaluation across complex cloud infrastructures',
    ],
    technologies: [
      { name: 'Node.js', category: 'Backend' },
      { name: 'Express', category: 'Backend' },
      { name: 'Node-RED', category: 'Platform' },
      { name: 'Kubernetes', category: 'Infrastructure' },
      { name: 'Elasticsearch', category: 'Database' },
      { name: 'JanusGraph', category: 'Database' },
      { name: 'Oracle DB', category: 'Database' },
      { name: 'Apache Kafka', category: 'Messaging' },
      { name: 'Redis', category: 'Cache' },
      { name: 'AWS', category: 'Cloud' },
      { name: 'GCP', category: 'Cloud' },
    ],
    impact:
      'Enabled security teams to identify and remediate attack paths 10x faster than traditional methods',
  },
  {
    title: 'QFlow - Distributed Workflow Orchestration Engine',
    role: 'Senior Developer',
    description:
      'Enterprise-grade workflow orchestration platform that allows users to create and execute complex cloud management workflows through an intuitive visual interface.',
    keyFeatures: [
      'Drag-and-drop workflow builder for creating custom security automations',
      'Event-driven architecture supporting real-time cloud resource monitoring',
      'Integration capabilities with major cloud providers and ITSM tools',
      'Automated remediation workflows for vulnerability management',
    ],
    technologies: [
      { name: 'Node.js', category: 'Backend' },
      { name: 'React', category: 'Frontend' },
      { name: 'Kafka', category: 'Messaging' },
      { name: 'Redis', category: 'Cache' },
      { name: 'AWS Lambda', category: 'Cloud' },
      { name: 'Docker', category: 'Infrastructure' },
      { name: 'Kubernetes', category: 'Infrastructure' },
    ],
    impact: 'Reduced manual security operations overhead by 60% for enterprise customers',
  },
  {
    title: 'Gurukul Vishwabharti School Website',
    role: 'Freelance Full-Stack Developer',
    description:
      'Comprehensive educational website for a CBSE-affiliated school in Haryana, featuring modern design and administrative functionality.',
    keyFeatures: [
      'Responsive design optimized for all devices',
      'Content management system for news, admissions, and academic information',
      'Student information portal with secure authentication',
      'Administrative dashboard for school management',
    ],
    technologies: [
      { name: 'HTML5', category: 'Frontend' },
      { name: 'CSS3', category: 'Frontend' },
      { name: 'JavaScript', category: 'Frontend' },
      { name: 'PHP/Node.js', category: 'Backend' },
      { name: 'MySQL', category: 'Database' },
    ],
    impact: '',
    link: 'https://www.gurukulvishwabharti.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-bg-primary">
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
            FEATURED PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-container p-8 rounded-xl"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-orbitron font-semibold text-accent-primary mb-4">
                    {project.title}
                  </h3>
                  <div className="text-accent-secondary mb-4">{project.role}</div>
                  <p className="text-text-secondary mb-6">{project.description}</p>

                  <h4 className="text-lg font-semibold text-accent-secondary mb-4">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6">
                    {project.keyFeatures.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  {project.impact && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-accent-secondary mb-2">Impact:</h4>
                      <p className="text-text-secondary">{project.impact}</p>
                    </div>
                  )}

                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent-primary hover:text-accent-tertiary transition-colors"
                    >
                      Visit Website
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  )}
                </div>

                <div className="lg:w-1/3">
                  <h4 className="text-lg font-semibold text-accent-secondary mb-4">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg text-sm font-medium transition-all hover:bg-accent-primary/20"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
