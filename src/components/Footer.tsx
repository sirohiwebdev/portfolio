'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const navigation = {
  sections: [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sirohiwebdev/',
      icon: FaLinkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/sirohiwebdev',
      icon: FaGithub,
    },
    {
      name: 'Medium',
      href: 'https://journal.abhisheksirohi.com/',
      icon: FaMedium,
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-bg-tertiary">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-8 border-b border-accent-primary/20">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-orbitron font-bold text-accent-primary mb-4">
              Abhishek Sirohi
            </h3>
            <p className="text-text-secondary mb-6 max-w-md">
              Lead Software Engineer specializing in cloud security, distributed systems, and graph
              database technologies.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary hover:bg-accent-primary/20 transition-colors"
                >
                  <item.icon className="text-xl" />
                  <span className="sr-only">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-accent-secondary mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.sections.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-accent-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-accent-secondary mb-4">Contact</h4>
            <ul className="space-y-3 text-text-secondary">
              <li>
                <a
                  href="mailto:abhisheksiroh19@gmail.com"
                  className="hover:text-accent-primary transition-colors"
                >
                  abhisheksiroh19@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917880329858" className="hover:text-accent-primary transition-colors">
                  +91 7880329858
                </a>
              </li>
              <li>Pune, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center text-text-secondary">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Abhishek Sirohi. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-lg bg-accent-primary text-bg-primary flex items-center justify-center hover:bg-accent-tertiary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-tertiary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        <span className="sr-only">Scroll to top</span>
      </button>
    </footer>
  );
};

export default Footer;
