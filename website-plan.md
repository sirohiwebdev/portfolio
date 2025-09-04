# Abhishek Sirohi - Modern Dark Theme Website Content & Design Guide

## Design System & Theme Specifications

### Color Palette - Dark Futuristic Theme

#### Primary Colors
```css
:root {
  /* Background Colors */
  --bg-primary: #0D0D0D;        /* Deep black base */
  --bg-secondary: #1A1A1A;      /* Rich black sections */
  --bg-tertiary: #242424;       /* Soft black cards */
  --bg-glass: rgba(26, 26, 26, 0.8); /* Glass morphism */
  
  /* Text Colors */
  --text-primary: #E5E7EB;      /* Light gray primary text */
  --text-secondary: #9CA3AF;    /* Medium gray secondary */
  --text-muted: #6B7280;        /* Subtle text */
  
  /* Accent Colors - Neon Highlights */
  --accent-primary: #00FF85;     /* Neon green - primary CTA */
  --accent-secondary: #1E90FF;   /* Electric blue - links */
  --accent-tertiary: #FF0099;    /* Vivid pink - hover states */
  --accent-gold: #FFD700;        /* Gold - achievements */
  --accent-cyan: #00FFFF;        /* Cyan - tech highlights */
  
  /* Graph/Data Colors */
  --graph-node: #4ADE80;         /* Graph visualization */
  --graph-edge: #3B82F6;         /* Connections */
  --code-bg: #111827;            /* Code block background */
  --code-border: #374151;        /* Code borders */
}
```

### Typography System - Futuristic & Energetic

#### Primary Font Stack
```css
/* Heading Font - Futuristic Display */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

/* Body Font - Clean & Modern */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Accent Font - Tech Monospace */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap');

.typography-system {
  /* Hero Title */
  --font-hero: 'Orbitron', system-ui, sans-serif;
  --size-hero: clamp(3rem, 8vw, 6rem);
  --weight-hero: 900;
  --spacing-hero: -0.02em;
  
  /* Section Headings */
  --font-heading: 'Orbitron', system-ui, sans-serif;
  --size-h1: clamp(2.5rem, 5vw, 4rem);
  --size-h2: clamp(2rem, 4vw, 3rem);
  --size-h3: clamp(1.5rem, 3vw, 2rem);
  --weight-heading: 700;
  
  /* Body Text */
  --font-body: 'Inter', system-ui, sans-serif;
  --size-body: clamp(1rem, 2vw, 1.125rem);
  --size-small: clamp(0.875rem, 1.5vw, 1rem);
  --line-height: 1.7;
  --weight-body: 400;
  
  /* Code & Tech Text */
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;
  --size-code: clamp(0.875rem, 1.5vw, 1rem);
}
```

---

## HERO SECTION - Landing Area

### Design Elements
```html
<section class="hero-section">
  <div class="hero-background">
    <!-- Animated particles/grid background -->
    <div class="particle-system"></div>
    <div class="grid-overlay"></div>
  </div>
  
  <div class="hero-content">
    <div class="glitch-text">
      <h1 class="hero-title">ABHISHEK SIROHI</h1>
    </div>
    
    <div class="role-animated">
      <span class="typewriter">Lead Software Engineer | Graph Database Expert | Cloud Security Specialist</span>
    </div>
    
    <div class="hero-description">
      <p class="fade-in">Pioneering the future of cloud security with <span class="highlight">JanusGraph</span> 
      and <span class="highlight">distributed systems</span>. Currently leading innovation at 
      <span class="accent-brand">Qualys</span>.</p>
    </div>
    
    <div class="cta-buttons">
      <button class="btn-primary neon-glow">View Projects</button>
      <button class="btn-secondary glass-effect">Download Resume</button>
    </div>
    
    <div class="social-links floating">
      <!-- Animated social icons -->
    </div>
  </div>
</section>
```

### CSS Styling
```css
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-title {
  font-family: var(--font-hero);
  font-size: var(--size-hero);
  font-weight: var(--weight-hero);
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: var(--spacing-hero);
  text-shadow: 0 0 20px rgba(0, 255, 133, 0.5);
  animation: titlePulse 3s ease-in-out infinite;
}

.typewriter {
  border-right: 2px solid var(--accent-primary);
  animation: typing 4s steps(50) infinite, blink 1s infinite;
}

.btn-primary {
  background: linear-gradient(45deg, var(--accent-primary), var(--accent-cyan));
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 255, 133, 0.4);
}

.particle-system {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><circle cx="1" cy="1" r="0.5" fill="%2300FF85" opacity="0.3"/></svg>');
  animation: particleFloat 20s linear infinite;
}
```

---

## ABOUT SECTION - Professional Story

### Design Layout
```html
<section class="about-section glass-container">
  <div class="section-header">
    <h2 class="section-title">
      <span class="title-number">01</span>
      <span class="title-text">ABOUT</span>
      <div class="title-underline"></div>
    </h2>
  </div>
  
  <div class="about-grid">
    <div class="about-text">
      <div class="text-block fade-up">
        <p class="lead-text">I'm a passionate <span class="highlight">Lead Software Engineer</span> 
        who thrives on building scalable, enterprise-grade solutions that make a real-world impact.</p>
        
        <p>With over <span class="accent-number">5+</span> years in the industry, I've evolved from a 
        full-stack developer to a technical leader specializing in 
        <span class="tech-highlight">cloud security</span>, 
        <span class="tech-highlight">distributed systems</span>, and 
        <span class="tech-highlight">graph database technologies</span>.</p>
        
        <p>Currently, I lead the <span class="highlight">graph development team at Qualys</span>, 
        where I'm spearheading the development of the company's first 
        <span class="accent-brand">Graph DB (JanusGraph)</span> based inventory collection 
        and rule-evaluation engine.</p>
      </div>
    </div>
    
    <div class="about-visual">
      <div class="profile-card hologram-effect">
        <div class="avatar-container">
          <img src="abhishek-profile.jpg" alt="Abhishek Sirohi" class="profile-image"/>
          <div class="avatar-glow"></div>
        </div>
        
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-number" data-count="5">0</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat-item">
            <span class="stat-number" data-count="50">0</span>
            <span class="stat-label">Projects Completed</span>
          </div>
          <div class="stat-item">
            <span class="stat-number" data-count="15">0</span>
            <span class="stat-label">Technologies Mastered</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Content Text

**About Me**

I'm a passionate software engineer who thrives on building scalable, enterprise-grade solutions that make a real-world impact. With over 5 years in the industry, I've evolved from a full-stack developer to a technical leader specializing in cloud security, distributed systems, and graph database technologies.

Currently, I lead the graph development team at Qualys, where I'm spearheading the development of the company's first Graph DB (JanusGraph) based inventory collection and rule-evaluation engine. This groundbreaking platform leverages cutting-edge technologies like Kafka, Redis, Kubernetes, and Node.js to scale cloud security operations for enterprise customers globally.

My journey in software engineering has been driven by curiosity and the desire to solve complex problems. From my early days working on full-stack web applications to now architecting distributed, low-code/no-code platforms, I've consistently focused on creating solutions that not only meet technical requirements but also enhance user experiences and operational efficiency.

Beyond my professional work, I'm actively involved in giving back to the community through mentoring, contributing to open-source projects, and taking on freelance projects that support educational institutions. I believe in the power of technology to transform lives and am committed to using my skills to create positive change.

When I'm not coding, you'll find me on the football field, exploring new technologies, or learning about business and entrepreneurship. I'm always open to collaborating on exciting projects and connecting with fellow tech enthusiasts.

---

## SKILLS SECTION - Technical Arsenal

### Core Technologies
- **Languages:** JavaScript, TypeScript, Java, Python, SQL
- **Frontend:** ReactJS, NextJS, HTML5, CSS3, Bootstrap
- **Backend:** Node.js, Express.js, Spring Boot, RESTful APIs
- **Databases:** JanusGraph, MongoDB, DynamoDB, Oracle, Redis, MySQL

### Cloud & DevOps
- **Cloud Platforms:** AWS (EC2, S3, Lambda, CloudFormation), GCP, Azure
- **Containerization:** Docker, Kubernetes, Container Orchestration
- **CI/CD:** Jenkins, GitHub Actions, DevOps Pipelines
- **Infrastructure:** Terraform, Serverless Architecture
- **Monitoring:** Grafana, Prometheus, Elasticsearch

### Specialized Technologies
- **Graph Databases:** JanusGraph, Gremlin Query Language, Apache TinkerPop
- **Message Streaming:** Apache Kafka, Event-Driven Architecture
- **Low-Code Platforms:** Node-RED, Visual Programming
- **Security:** Cloud Security, Vulnerability Management, Compliance

### Data & Analytics
- **Data Science:** Basic Machine Learning, Data Analysis
- **AI/ML:** Prompt Engineering, AI-Driven Development, MCP Servers
- **Big Data:** Data Pipeline Architecture, ETL Processes

### Development Practices
- **Methodologies:** Agile, Scrum, Test-Driven Development
- **Architecture:** System Design, Microservices, Distributed Systems
- **Version Control:** Git, GitHub, Code Review Best Practices

---

## EXPERIENCE SECTION - Professional Journey

### Lead Software Engineer | Qualys
*June 2025 - Present â€¢ Pune, Maharashtra*

**Key Responsibilities:**

- Spearheading the graph development team to deliver Qualys' first Graph DB (JanusGraph) based inventory collection and rule-evaluation engine
- Leading the architecture and development of distributed cloud security platform processing billions of assets
- Pioneering scalable solutions using Kafka, Redis, Kubernetes, and Node.js for enterprise customers
- Driving innovation in attack path analysis and real-time security insights
- Managing cross-functional teams and establishing technical leadership practices

**Technologies:** JanusGraph, Apache Kafka, Redis, Kubernetes, Node.js, AWS, GCP, Oracle DB

### Senior Software Engineer | Qualys
*June 2023 - June 2025 â€¢ Pune, Maharashtra*

**Key Achievements:**
- Designed & developed performance-enhancing features for QFlow module, improving platform efficiency by 40%
- Developed No Code - Low Code platform using Node-RED for cloud resource scanning and attack path generation
- Led code review initiatives and productivity programs, mentoring junior developers
- Built event-driven workflow orchestration systems reducing manual operations by 60%
- Established best practices for distributed system development

**Technologies:** Node-RED, React, Node.js, Kafka, AWS, Docker, Event-Driven Architecture

### Software Engineer | Qualys
*August 2021 - May 2023 â€¢ Pune, Maharashtra*

**Key Contributions:**
- Built full-stack solutions in Cloud Security domain, tackling complex automation and compliance challenges
- Designed event-based trigger systems empowering Qualys Scan for enterprise customers
- Improved system performance and throughput by 50% through optimization and monitoring
- Enhanced fault tolerance capabilities, reducing downtime and improving reliability
- Developed monitoring dashboards for continuous system health tracking

**Technologies:** React, Node.js, AWS, JavaScript, TypeScript, Cloud APIs

### Software Developer | Kandor Soft Labs (TotalCloud Inc.)
*August 2020 - August 2021 â€¢ Bengaluru, Karnataka*
*Acquired by Qualys*

**Key Responsibilities:**
- Full-stack developer on TotalCloud platform, focusing on product design and user experience
- Enhanced user experience and platform functionality
- Contributed to platform architecture that formed foundation of Qualys TotalCloud suite
- Worked with serverless architecture and NoSQL databases

**Technologies:** React, Node.js, AWS, Serverless, DynamoDB, JavaScript

---

## PROJECTS SECTION - Featured Projects

### Cloud Graph Inventory Management Platform
**Role:** Lead Developer & Architect

Revolutionary distributed low-code/no-code platform that transforms how enterprises manage and visualize their cloud security posture. Built using Node-RED for visual programming, the system powers inventory data ingestion into a JanusGraph-backed system.

**Key Features:**
- Real-time inventory collection from AWS, GCP, and Azure cloud environments
- Attack path visualization using advanced graph algorithms and security policies
- Natural language querying through MCP (Model Context Protocol) servers
- Automated security rule evaluation across complex cloud infrastructures

**Technologies:** Node.js, Express, Node-RED, Kubernetes, Elasticsearch, JanusGraph, Oracle DB, Apache Kafka, Redis, AWS, GCP

**Impact:** Enabled security teams to identify and remediate attack paths 10x faster than traditional methods

### QFlow - Distributed Workflow Orchestration Engine
**Role:** Senior Developer

Enterprise-grade workflow orchestration platform that allows users to create and execute complex cloud management workflows through an intuitive visual interface.

**Key Features:**
- Drag-and-drop workflow builder for creating custom security automations
- Event-driven architecture supporting real-time cloud resource monitoring
- Integration capabilities with major cloud providers and ITSM tools
- Automated remediation workflows for vulnerability management

**Technologies:** Node.js, React, Kafka, Redis, AWS Lambda, Docker, Kubernetes

**Impact:** Reduced manual security operations overhead by 60% for enterprise customers

### Gurukul Vishwabharti School Website
**Role:** Freelance Full-Stack Developer

Comprehensive educational website for a CBSE-affiliated school in Haryana, featuring modern design and administrative functionality.

**Key Features:**
- Responsive design optimized for all devices
- Content management system for news, admissions, and academic information
- Student information portal with secure authentication
- Administrative dashboard for school management

**Technologies:** HTML5, CSS3, JavaScript, PHP/Node.js, MySQL

**Website:** https://www.gurukulvishwabharti.com

---

## EDUCATION SECTION

### Bachelor of Technology - Computer Science & Engineering
**Rajkiya Engineering College Kannauj** | *August 2016 - June 2020*  
*Kannauj, Uttar Pradesh*

- **CGPA:** 7.2/10.0
- **Relevant Coursework:** Data Structures & Algorithms, Database Management Systems, Computer Networks, Software Engineering, Operating Systems
- **Projects:** Multiple academic projects involving web development, database design, and system programming

### Higher Secondary (10+2) - Science
**Meerut Public School** | *April 2014 - March 2015*  
*Meerut, Uttar Pradesh*

- **Percentage:** 91.3%
- **Subjects:** Physics, Chemistry, Mathematics, English

---

## LEADERSHIP & ACHIEVEMENTS

### Professional Achievements
- Released the first-ever Graph DB based inventory system at Qualys, processing billions of cloud assets
- Led a team of 5+ engineers in developing cutting-edge cloud security solutions
- Improved system performance metrics by 40-60% across multiple projects
- Recognized for technical leadership and innovation in cloud security domain

### Academic & Personal Achievements
- Awarded "Most Dynamic Student" in college for leadership and technical contributions
- Scored perfect CGPA of 10/10 in 10th board examinations
- Won Inter-college Football Tournament consecutively in 2019 and 2020
- Led technical teams and events as Assistant Coordinator at Unnat Technical Club

### Leadership Roles
- **Assistant Coordinator** - Unnat Technical Club, RECK (Jan 2018 - Jun 2020)
- **Technical Secretary** - Abhyutthan 2018 (Annual Techno-cultural fest)
- **Team Captain** - College Football Team (2019-2020)

---

## CONTACT SECTION

### Get In Touch

Ready to collaborate on exciting projects or discuss technology innovations? Let's connect!

**Contact Information:**
- **Email:** abhisheksiroh19@gmail.com
- **Phone:** +91 7880329858, +91 9759781207
- **Location:** Pune, Maharashtra, India

**Professional Links:**
- **LinkedIn:** https://www.linkedin.com/in/sirohiwebdev/
- **GitHub:** https://github.com/sirohiwebdev
- **Website:** https://abhisheksirohi.com

**Availability:**
- Open to consulting opportunities
- Available for technical discussions
- Interested in collaborative projects in cloud security, distributed systems, and graph technologies

**Response Time:** Less than 24 hours

---

## CSS ANIMATIONS & INTERACTIONS

### Keyframe Animations
```css
/* Title Pulse Animation */
@keyframes titlePulse {
  0%, 100% { text-shadow: 0 0 20px rgba(0, 255, 133, 0.5); }
  50% { text-shadow: 0 0 40px rgba(0, 255, 133, 0.8); }
}

/* Typewriter Effect */
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  0%, 50% { border-color: var(--accent-primary); }
  51%, 100% { border-color: transparent; }
}

/* Particle Float Animation */
@keyframes particleFloat {
  0% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(120deg); }
  66% { transform: translateY(5px) rotate(240deg); }
  100% { transform: translateY(0px) rotate(360deg); }
}

/* Holographic Scan Line */
@keyframes scanLine {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* Border Glow Animation */
@keyframes borderGlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Progress Bar Fill */
@keyframes progressFill {
  from { width: 0%; }
  to { width: var(--progress); }
}

/* Skill Shine Effect */
@keyframes skillShine {
  0% { transform: translateX(-20px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(0px); opacity: 0; }
}
```

### Interaction States
```css
.interactive-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.interactive-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.glow-effect {
  position: relative;
  overflow: hidden;
}

.glow-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.glow-effect:hover::before {
  left: 100%;
}
```

---

## RESPONSIVE DESIGN BREAKPOINTS

### Mobile-First Approach
```css
/* Mobile First */
.container {
  max-width: 100%;
  padding: 0 20px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    max-width: 750px;
    margin: 0 auto;
    padding: 0 30px;
  }
  
  .hero-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
  }
  
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
    padding: 0 40px;
  }
  
  .skills-container {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .about-grid {
    grid-template-columns: 1.5fr 1fr;
    gap: 60px;
  }
}

/* Large Desktop */
@media (min-width: 1600px) {
  .container {
    max-width: 1400px;
  }
  
  .hero-title {
    font-size: 6rem;
  }
  
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
  }
}
```

---

## PERFORMANCE & ACCESSIBILITY

### Loading States & Performance
```css
/* Loading Animation */
.loading-state {
  background: linear-gradient(90deg, var(--bg-tertiary) 25%, var(--bg-secondary) 50%, var(--bg-tertiary) 75%);
  background-size: 200% 100%;
  animation: loading-shimmer 2s infinite;
}

@keyframes loading-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Focus States */
.focusable:focus {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## IMPLEMENTATION CHECKLIST

### Essential Features
- [x] Dark theme with neon accents
- [x] Futuristic typography (Orbitron + Inter + JetBrains Mono)
- [x] Animated particles/grid background
- [x] Interactive skill visualizations
- [x] Holographic effects and glass morphism
- [x] Smooth scrolling and parallax
- [x] Mobile-responsive design
- [x] Loading states and animations
- [x] Contact form with validation
- [x] Social media integration

### Performance Optimizations
- [x] Lazy loading for images
- [x] CSS animations over JavaScript
- [x] Optimized font loading
- [x] Compressed assets
- [x] Efficient CSS selectors
- [x] Accessibility compliance (WCAG 2.1)

---

This design system creates a modern, futuristic dark-themed website that perfectly showcases Abhishek's expertise in cutting-edge technologies while maintaining professional credibility and optimal user experience.