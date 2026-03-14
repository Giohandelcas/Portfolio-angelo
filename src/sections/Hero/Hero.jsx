import styles from "./Hero.module.scss";

function Hero() {
  const downloadCV = () => {
    const cvUrl = '/Angelo-Resume.pdf';
    
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Angelo_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLetTalk = () => {
    // Link de WhatsApp 
    const whatsappLink = 'https://wa.link/hxkteh';
    
    // Abrir en nueva pestaña
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

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
            <button className={styles.primary} onClick={handleLetTalk}>
              Let's talk
            </button>
            <button className={styles.secondary} onClick={downloadCV}>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;