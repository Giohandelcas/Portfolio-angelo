import styles from "./Skills.module.scss";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiPostgresql,
  SiExpress,
  SiNestjs,
  SiPostman,
} from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiNestjs />, name: "NestJS" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiPostman />, name: "Postman" },
];

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Technologies</h2>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}

          {/* duplicamos para scroll infinito */}
          {skills.map((skill, index) => (
            <div key={index + "copy"} className={styles.skill}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;