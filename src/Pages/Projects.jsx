import React, { useEffect, useState } from "react";
import ProjectCard from "../Components/ProjectsCard";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/projects/")
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
