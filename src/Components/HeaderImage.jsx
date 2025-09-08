import React from "react";
import { motion } from "framer-motion";

export default function HeaderImage() {
  return (
    <section className="header-banner">
      <motion.img
        src="/images/header.jpg"  // 🔑 place your horizontal image in `public/images/`
        alt="Header Banner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="header-img"
      />
    </section>
  );
}
