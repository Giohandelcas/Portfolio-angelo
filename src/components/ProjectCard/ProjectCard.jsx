import { motion } from "framer-motion";
import styles from "./ProjectCard.module.scss";

function ProjectCard({ project }) {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <img src={project.image} alt={project.title} />

      <div className={styles.content}>
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className={styles.tech}>
          {project.tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <div className={styles.buttons}>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;