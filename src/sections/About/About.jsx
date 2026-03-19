import { useInView } from 'react-intersection-observer';
import styles from './About.module.scss';
import videoSrc from '../../assets/videos/VideoPortafolio.mp4';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>
            About <span>me</span>
          </h2>
          <p>
              I'm a full-stack developer with over a year of experience building comprehensive web solutions. During this time, I have worked on personal and collaborative projects that have allowed me to master various technologies, as well as adopt best practices such as version control with Git and agile methodologies.
          </p>
          <p>
            I enjoy facing new challenges that push me out of my comfort zone and allow me to continue growing as a professional. My goal is to contribute real solutions with clean, responsible, and scalable code.
          </p>

          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <h3>2+</h3>
              <p>Years of experience as Product Manager</p>
            </div>
            <div className={styles.statItem}>
              <h3>1+</h3>
              <p>Year of experience as Full Stack Developer</p>
            </div>
            <div className={styles.statItem}>
              <h3>2</h3>
              <p>Languages: Spanish C1 and English B2+</p>
            </div>
          </div>
        </div>

        <div className={styles.video}>
          <video
            controls
            playsInline
            preload="none"
            loading="lazy"
          >
            {inView && <source src={videoSrc} type="video/mp4" />}
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </section>
  );
}

export default About;