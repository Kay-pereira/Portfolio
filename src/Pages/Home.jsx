import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      {/* Animated intro text */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="hero-heading"
      >
        Hi, I'm <span className="highlight">Paakwesi Pereira</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="hero-subtext"
      >
        A passionate web developer specializing in{" "}
        <span className="highlight">React</span> &{" "}
        <span className="highlight">Django</span>. I love
        building interactive and secure web experiences for businesses.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="cta-buttons"
      >
        <a href="#projects">
          <button className="view-work-btn">View My Work</button>
        </a>
        <a href="#contact">
          <button className="book-meeting-btn">Book a Meeting</button>
        </a>
      </motion.div>
    </section>
  );
}
