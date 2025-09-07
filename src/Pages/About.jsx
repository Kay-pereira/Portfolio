import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Braces,
  Signal,
  Database,
  Palette,
  Server,
  Laptop,
  Wrench,
} from "lucide-react";

//import "./index.css"; // 👈 Import the CSS file

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Heading */}
        <h2 className="section-heading">
          About <span className="highlight">Me</span>
        </h2>

        <div className="about-grid">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="sub-heading">Who I Am</h3>
            <p className="text">
              Hi, I’m <span className="bold">Paakwesi Pereira</span>, a
              passionate web developer with a love for building clean,
              functional, business centered experiences. My focus is on creating
              modern web apps that combine strong{" "}
              <span className="highlight">frontend</span> design with robust{" "}
              <span className="highlight">backend</span> systems.
            </p>

            <p className="text">
              With a strong foundation in <span className="bold">React</span>{" "}
              and <span className="bold">Django</span>, I enjoy crafting
              full-stack applications that help businesses and individuals
              succeed online.
            </p>
          </motion.div>

          {/* Skills & Tools Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="skills-grid"
          >
            {/* Skill Items */}
            <div className="skill-card">
              <Code className="icon" />
              <p>React</p>
            </div>

            <div className="skill-card">
              <Server className="icon" />
              <p>Django</p>
            </div>

            <div className="skill-card">
              <Database className="icon" />
              <p>MySQL & SQLite</p>
            </div>

            <div className="skill-card">
              <Braces className="icon" />
              <p>JavaScript & XML</p>
            </div>

            <div className="skill-card">
              <Wrench className="icon" />
              <p>Python</p>
            </div>

            <div className="skill-card">
              <Palette className="icon" />
              <p>UI/UX</p>
            </div>

            <div className="skill-card">
              <Wrench className="icon" />
              <p>Git</p>
            </div>

            <div className="skill-card">
              <Signal className="icon" />
              <p>Africa's Talking</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
