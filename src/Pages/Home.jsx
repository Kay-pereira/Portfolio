import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const greetings = [
    "Hi",
    "Hola",
    "Bonjour",
    "Ciao",
    "Hallo",
    "Olá",
    "Namaste",
    "Salaam",
    "Konnichiwa",
    "Zdravstvuyte",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 1000); // change every second
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {/* Animated intro text */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="hero-heading"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={greetings[index]} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1. }}
            className="hi inline-block mr-2"
          >
            {greetings[index]}
          </motion.div>
        </AnimatePresence>
        I'm <span className="hero-heading">Edmund Paakwesi Pereira</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="hero-subtitle"
      >
        A passionate web developer specializing in{" "}
        <span className="highlight">React</span> &{" "}
        <span className="highlight">Django</span>. I love building interactive
        and secure web experiences for businesses.
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
