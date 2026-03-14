import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContainer}>
        <div className={styles.content}>
          <h1>Hi, I'm Angelo</h1>
          <h4>Full Stack web Developer</h4>
          <p>
            Code with purpose. Design with passion. Create without limits.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primary}>Let's talk</button>
            <button className={styles.secondary}>Download Cv</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;