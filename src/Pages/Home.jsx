import React from "react";
import { motion } from "framer-motion";




export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Animated intro text */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="hero-heading"
      >
        Hi, I'm <span className="hero-heading">Paakwesi Pereira</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="hero-subtitle"
      >
        A passionate web developer specializing in{" "}
        <span className="highlight">React</span> &{" "}
        <span className="highlight">Django</span>. I love
        building interactive and secure web experiences for businesses.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="cta-buttons"
      >
        <a href="#projects" className="cta-buttons">
          <button className="view-work-btn">View My Work</button>
        </a>
        <a href="#contact" className="btn-secondary">
          <button className="book-meeting-btn">Book a Meeting</button>
        </a>
      </motion.div>
    </section>
  );
}
