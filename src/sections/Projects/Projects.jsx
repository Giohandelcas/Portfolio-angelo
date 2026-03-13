import { useState } from "react";
import styles from "./Projects.module.scss";
import projects from "../../data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>

      <div className={styles.filters}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("professional")}>
          Professional
        </button>
        <button onClick={() => setFilter("personal")}>
          Personal
        </button>
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;