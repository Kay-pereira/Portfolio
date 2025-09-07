import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const socials = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      link: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      link: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      link: "https://twitter.com/yourusername",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      link: "mailto:your@email.com",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Copyright */}
        <p className="footer-text">
          © {new Date().getFullYear()} Edmund Pereira. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="footer-socials">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
