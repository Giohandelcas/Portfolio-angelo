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
            Sobre <span>Mí</span>
          </h2>
          <p>
            Soy desarrollador full stack con mas de un año de experiencia creando soluciones web completas. Durante este tiempo he trabajado en proyectos personales y colaborativos que me han permitido dominar tecnologías, además de adoptar buenas prácticas como el control de versiones con Git y metodologías ágiles.
          </p>
          <p>
            Disfruto enfrentarme a nuevos desafíos que me saquen de mi zona de confort y me permitan seguir creciendo como profesional. Mi objetivo es aportar soluciones reales con código limpio, responsable y escalable.
          </p>

          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <h3>2+</h3>
              <p>Años de experiencia como Product manager</p>
            </div>
            <div className={styles.statItem}>
              <h3>1+</h3>
              <p>Años de experiencia como full stack developer</p>
            </div>
            <div className={styles.statItem}>
              <h3>2</h3>
              <p>Idiomas: Español C1 y Inglés B2+</p>
            </div>
          </div>
        </div>

        <div className={styles.video}>
          <video controls
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </section>
  );
}

export default About;