import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="project-card"
    >
      {/* Project Image */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image"
        />
      )}

      {/* Project Info */}
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>

        {/* View Button */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-btn"
          >
            View Project
          </a>
        )}
      </div>
    </motion.div>
  );
}
