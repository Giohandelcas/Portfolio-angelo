import styles from "./Contact.module.scss";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const handleLetTalk = () => {
    const whatsappLink = 'https://wa.link/hxkteh';
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className={`${styles.contact} ${inView ? styles.visible : ''}`} ref={ref}>
      <h2>Let's Work Together</h2>

      <p>
        Do you have a project in mind or would you like me to join your team?
      </p>

      <div className={styles.actions}>
        <a className={styles.primary} onClick={handleLetTalk}>
          Let's Talk
        </a>
      </div>

      <div className={styles.links}>
        <a href="https://github.com/Giohandelcas" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/angelo-del-castillo-a649221ab/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>

        <a href="mailto:giohandelcas@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}

export default Contact;