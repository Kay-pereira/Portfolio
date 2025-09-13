import React from "react";
import { motion } from "framer-motion";
import weblinks from "./Weblinks";
import { useState } from "react";

export default function ProjectCard({ project, index }) {
    const [showWeblinks, setshowWeblinks] = useState(false)

    const handleClick = () => {
        setshowWeblinks(true)
    }
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      animate={{ opacity: 1, y: 0 }}
      
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
    <div className= "live-btn">
    <button className="view-work-btn" onClick={handleClick}>View this Project<span className="material-symbols-outlined">open_in_new</span></button>
    {showWeblinks && < weblinks />}
    </div>
    </div>

      </div>
    </motion.div>
  );
}
