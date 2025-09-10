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
            <h3 className="text-xl font-semibold mb-2">{project.project_name}</h3>
    <p className="text-gray-600 mb-4">{project.project_description}</p>

    {project.project_image && (
    <img
        src={project.project_image}
        alt={project.project_name}
        className="project-card-image"
    />
    )}

    <div className="view-live-section">
    <a href="">
    <div className="">
    <button className="view-work-btn">View this Project<span class="material-symbols-outlined">open_in_new</span></button>
    </div>
    </a>
    </div>

      </div>
    </motion.div>
  );
}
