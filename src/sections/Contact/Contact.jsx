import styles from "./Contact.module.scss";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Let's Work Together</h2>

      <p>
        Do you have a project in mind or would you like me to join your team?
      </p>

      <div className={styles.actions}>
        <a href="mailto:angelo@email.com" className={styles.primary}>
          Let's Talk
        </a>
      </div>

      <div className={styles.links}>
        <a href="#">
          <FaGithub />
        </a>

        <a href="#">
          <FaLinkedin />
        </a>

        <a href="mailto:angelo@email.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}

export default Contact;