import { useState } from "react";
import styles from "./Hero.module.scss";

function Hero() {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const downloadCV = (language) => {
    const cvUrls = {
      es: '/Angelo_CV_Spanish.docx.pdf', 
      en: '/Angelo_CV_English.docx.pdf'  
    };
    
    const cvUrl = cvUrls[language];
    const fileName = language === 'es' ? 'Angelo_CV_Espanol.docx.pdf' : 'Angelo_CV_Ingles.docx.pdf';
    
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowLanguageOptions(false); 
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
          <h1>Hi, I'm Angelo Del Castillo</h1>
          <h4>Full Stack web Developer</h4>
          <p>
            Code with purpose. Design with passion. Create without limits.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primary} onClick={handleLetTalk}>
              Let's talk
            </button>
            
            {/* Contenedor del botón de CV con selector de idioma */}
            <div className={styles.cvContainer}>
              <button 
                className={styles.secondary}
                onClick={() => setShowLanguageOptions(!showLanguageOptions)}
              >
                Download CV
              </button>
              
              {showLanguageOptions && (
                <div className={styles.languageOptions}>
                  <button onClick={() => downloadCV('en')}>
                    🇬🇧 English
                  </button>
                  <button onClick={() => downloadCV('es')}>
                    🇪🇸 Español
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;