import { motion } from "framer-motion"

export default function HeaderImage() {
  return (
    <section className="header-banner">
      <motion.img
        src="src\assets\EDMUND_K_PEREIRA.svg"
        alt="Header Banner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="header-banner"
      />
    </section>
  )
}
