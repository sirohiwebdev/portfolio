'use client';

import { motion } from 'framer-motion';

interface SkillCategory {
  category: string;
  skills: string[];
}

interface SkillSection {
  title: string;
  items: SkillCategory[];
}

const skills: Record<string, SkillSection> = {
  core: {
    title: "Core Technologies",
    items: [
      { category: "Languages", skills: ["JavaScript", "TypeScript", "Java", "Python", "SQL"] },
      { category: "Frontend", skills: ["ReactJS", "NextJS", "HTML5", "CSS3", "Bootstrap"] },
      { category: "Backend", skills: ["Node.js", "Express.js", "Spring Boot", "RESTful APIs"] },
      { category: "Databases", skills: ["JanusGraph", "MongoDB", "DynamoDB", "Oracle", "Redis", "MySQL"] }
    ]
  },
  cloud: {
    title: "Cloud & DevOps",
    items: [
      { category: "Cloud Platforms", skills: ["AWS (EC2, S3, Lambda, CloudFormation)", "GCP", "Azure"] },
      { category: "Containerization", skills: ["Docker", "Kubernetes", "Container Orchestration"] },
      { category: "CI/CD", skills: ["Jenkins", "GitHub Actions", "DevOps Pipelines"] },
      { category: "Infrastructure", skills: ["Terraform", "Serverless Architecture"] },
      { category: "Monitoring", skills: ["Grafana", "Prometheus", "Elasticsearch"] }
    ]
  },
  specialized: {
    title: "Specialized Technologies",
    items: [
      { category: "Graph Databases", skills: ["JanusGraph", "Gremlin Query Language", "Apache TinkerPop"] },
      { category: "Message Streaming", skills: ["Apache Kafka", "Event-Driven Architecture"] },
      { category: "Low-Code Platforms", skills: ["Node-RED", "Visual Programming"] },
      { category: "Security", skills: ["Cloud Security", "Vulnerability Management", "Compliance"] }
    ]
  },
  dataAndAnalytics: {
    title: "Data & Analytics",
    items: [
      { category: "Data Science", skills: ["Basic Machine Learning", "Data Analysis"] },
      { category: "AI/ML", skills: ["Prompt Engineering", "AI-Driven Development", "MCP Servers"] },
      { category: "Big Data", skills: ["Data Pipeline Architecture", "ETL Processes"] }
    ]
  },
  practices: {
    title: "Development Practices",
    items: [
      { category: "Methodologies", skills: ["Agile", "Scrum", "Test-Driven Development"] },
      { category: "Architecture", skills: ["System Design", "Microservices", "Distributed Systems"] },
      { category: "Version Control", skills: ["Git", "GitHub", "Code Review Best Practices"] }
    ]
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-bg-secondary">
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
            TECHNICAL ARSENAL
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-4"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.values(skills).map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-container p-8 rounded-xl"
            >
              <h3 className="text-2xl font-orbitron font-semibold text-accent-primary mb-6">
                {section.title}
              </h3>
              <div className="space-y-8">
                {section.items.map((category) => (
                  <div key={category.category}>
                    <h4 className="text-lg font-semibold text-accent-secondary mb-4">
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg text-sm font-medium transition-all hover:bg-accent-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
