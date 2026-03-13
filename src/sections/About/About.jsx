import { motion } from "framer-motion";
import styles from "./About.module.scss";
import videoSergi from "../../assets/videos/sergio.mp4";

function About() {
  return (
    <section id="about" className={styles.about}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.text}>
          <h2>About Me</h2>

          <p>
            Hi, I'm Angelo Del Castillo, a Full Stack Developer focused on
            building modern web applications with clean architecture and great
            user experience.
          </p>

          <p>
            I enjoy working with modern technologies like React, Node.js and
            PostgreSQL, and I’m passionate about creating solutions that help
            businesses grow.
          </p>

          <p>
            I'm constantly learning new technologies and improving my skills to
            build better digital products.
          </p>
        </div>

        <div className={styles.video}>
          <video autoPlay loop muted>
            <source src={videoSergi} type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </section>
  );
}

export default About;