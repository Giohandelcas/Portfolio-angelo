import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Code with purpose.
          <br />
          Design with passion.
          <br />
          Create without limits.
        </h1>

        <p>
          Full Stack Developer specialized in building modern web
          applications with clean architecture and great user experience.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primary}>Let's Talk</button>
          <button className={styles.secondary}>Download CV</button>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;