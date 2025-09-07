"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMedium,
  FaPhone,
} from "react-icons/fa";

interface ContactInfo {
  email: string;
  phone: string[];
  location: string;
  links: {
    linkedin: string;
    github: string;
    website: string;
    medium: string;
  };
}

const contactInfo: ContactInfo = {
  email: "abhisheksiroh19@gmail.com",
  phone: ["+91 7880329858", "+91 9759781207"],
  location: "Pune, Maharashtra, India",
  links: {
    linkedin: "https://www.linkedin.com/in/sirohiwebdev/",
    github: "https://github.com/sirohiwebdev",
    website: "https://abhisheksirohi.com",
    medium: "https://journal.abhisheksirohi.com/",
  },
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-bg-secondary">
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
            GET IN TOUCH
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-4"></div>
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss technology
            innovations? Let&apos;s connect!
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-container p-8 rounded-xl"
            >
              <h3 className="text-2xl font-orbitron font-semibold text-accent-primary mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                    <FaEnvelope className="text-2xl text-accent-primary" />
                  </div>
                  <div>
                    <p className="text-text-secondary mb-1">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-accent-primary hover:text-accent-tertiary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                    <FaPhone className="text-2xl text-accent-primary" />
                  </div>
                  <div>
                    <p className="text-text-secondary mb-1">Phone</p>
                    {contactInfo.phone.map((number) => (
                      <a
                        key={number}
                        href={`tel:${number.replace(/\s+/g, "")}`}
                        className="block text-accent-primary hover:text-accent-tertiary transition-colors"
                      >
                        {number}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-2xl text-accent-primary" />
                  </div>
                  <div>
                    <p className="text-text-secondary mb-1">Location</p>
                    <p className="text-accent-primary">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h4 className="text-lg font-semibold text-accent-secondary mb-4">
                  Professional Links
                </h4>
                <div className="flex gap-4">
                  <a
                    href={contactInfo.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary hover:bg-accent-primary/20 transition-colors"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a
                    href={contactInfo.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary hover:bg-accent-primary/20 transition-colors"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href={contactInfo.links.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary hover:bg-accent-primary/20 transition-colors"
                  >
                    <FaMedium className="text-2xl" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-container p-8 rounded-xl"
            >
              <h3 className="text-2xl font-orbitron font-semibold text-accent-primary mb-8">
                Send Message
              </h3>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-text-secondary mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-accent-primary/20 text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-text-secondary mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-accent-primary/20 text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-text-secondary mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-accent-primary/20 text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-text-secondary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-bg-tertiary border border-accent-primary/20 text-text-primary focus:outline-none focus:border-accent-primary transition-colors resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-accent-primary text-bg-primary font-semibold rounded-lg hover:bg-accent-tertiary transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>

          {/* Availability Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <h4 className="text-lg font-semibold text-accent-secondary mb-4">
              Availability
            </h4>
            <ul className="text-text-secondary space-y-2">
              <li>Open to consulting opportunities</li>
              <li>Available for technical discussions</li>
              <li>
                Interested in collaborative projects in cloud security,
                distributed systems, and graph technologies
              </li>
            </ul>
            <p className="mt-4 text-accent-primary font-medium">
              Response Time: Less than 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
