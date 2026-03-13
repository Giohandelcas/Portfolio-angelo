import { useMemo } from "react";
import styles from "./Skills.module.scss";
import React from "react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaVuejs,
  FaAngular,
  FaPython,
  FaDocker,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiExpress,
  SiNestjs,
  SiPostman,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiGraphql,
  SiJest,
} from "react-icons/si";

const frontendSkills = [
  { icon: <FaReact />, name: "React", color: "#61DAFB" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
  { icon: <SiRedux />, name: "Redux", color: "#764ABC" },
];

const backendSkills = [
  { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
  { icon: <SiExpress />, name: "Express", color: "#000000" },
  { icon: <SiNestjs />, name: "NestJS", color: "#E0234E" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <FaPython />, name: "Python", color: "#3776AB" },
  { icon: <SiGraphql />, name: "GraphQL", color: "#E10098" },
];

const toolsSkills = [
  { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
  { icon: <FaGithub />, name: "GitHub", color: "#181717" },
  { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
  { icon: <FaDocker />, name: "Docker", color: "#2496ED" },
  { icon: <SiJest />, name: "Jest", color: "#C21325" },
];

function Skills() {
  // Usar useMemo para calcular los arrays solo cuando sea necesario
  const duplicatedFrontend = useMemo(() => [...frontendSkills, ...frontendSkills], []);
  const duplicatedBackend = useMemo(() => [...backendSkills, ...backendSkills], []);
  const duplicatedTools = useMemo(() => [...toolsSkills, ...toolsSkills], []);

  // Función para aplicar color al icono
  const renderIcon = (skill) => {
    return React.cloneElement(skill.icon, {
      style: { color: skill.color },
      className: styles.skillIcon
    });
  };

  return (
    <section id="skills" className={styles.skills}>
      <h2>Technologies & Tools</h2>

      {/* Frontend Skills */}
      <div className={styles.categoryTitle}>
        <span>Frontend</span>
      </div>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {duplicatedFrontend.map((skill, index) => (
            <div key={`front-${index}`} className={styles.skill}>
              {renderIcon(skill)}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Backend Skills */}
      <div className={styles.categoryTitle}>
        <span>Backend</span>
      </div>
      <div className={styles.marqueeReverse}>
        <div className={styles.track}>
          {duplicatedBackend.map((skill, index) => (
            <div key={`back-${index}`} className={styles.skill}>
              {renderIcon(skill)}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools & Others */}
      <div className={styles.categoryTitle}>
        <span>Tools</span>
      </div>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {duplicatedTools.map((skill, index) => (
            <div key={`tool-${index}`} className={styles.skill}>
              {renderIcon(skill)}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;