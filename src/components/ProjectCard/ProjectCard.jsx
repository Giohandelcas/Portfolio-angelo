import { motion } from "framer-motion";
import styles from "./ProjectCard.module.scss";

function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
    >
      <img src={project.image} alt={project.title} />

      <div className={styles.content}>
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className={styles.tech}>
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
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