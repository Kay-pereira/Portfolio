

import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Socials() {
  const socials = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      link: "https://github.com/Kay-pereira",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      link: "https://linkedin.com/in/Edmund Kwesi Pereira",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      link: "https://twitter.com/yourusername",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      link: "https://edmundpereira18@gmail.com",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

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


