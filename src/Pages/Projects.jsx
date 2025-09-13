import React, { useEffect, useState } from "react";
import ProjectCard from "../Components/ProjectsCard";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://67e5687ca4cb.ngrok-free.app/api/projects/")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-heading">
          My <span className="highlight">Projects</span>
        </h2>
        <p>A short List of Projects I'm actively Developing</p>

        {/* Grid of project cards */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
