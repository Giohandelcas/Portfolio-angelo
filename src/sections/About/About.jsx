import { useInView } from 'react-intersection-observer';
import styles from './About.module.scss';
import videoSrc from '../../assets/videos/sergio.mp4'; 

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
            Soy un desarrollador web apasionado por crear experiencias digitales
            únicas y funcionales. Con más de 5 años de experiencia en el sector,
            he trabajado con clientes de todo el mundo.
          </p>
          <p>
            Mi enfoque combina diseño creativo con código limpio y eficiente,
            asegurando que cada proyecto no solo se vea increíble, sino que
            también funcione perfectamente.
          </p>

          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <h3>2+</h3>
              <p>Años de experiencia como Product manager</p>
            </div>
            <div className={styles.statItem}>
              <h3>1+</h3>
              <p>Año de experiencia como Desarrollador Web</p>
            </div>
            <div className={styles.statItem}>
              <h3>10+</h3>
              <p>Proyectos</p>
            </div>
          </div>
        </div>

        <div className={styles.video}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="path/to/poster.jpg" // Opcional: imagen de preview
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