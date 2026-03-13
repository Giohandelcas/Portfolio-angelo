import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar estilo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al hacer click en un link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>Angelodev</div>

      {/* Botón hamburguesa */}
      <div 
        className={`${styles.menuToggle} ${isOpen ? styles.active : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Overlay oscuro cuando el menú está abierto */}
      <div 
        className={`${styles.overlay} ${isOpen ? styles.active : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Menú */}
      <ul className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
        <li>
          <a href="#hero" onClick={handleLinkClick}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={handleLinkClick}>About</a>
        </li>
        <li>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </li>
        <li>
          <Link to="/blog" onClick={handleLinkClick}>Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;