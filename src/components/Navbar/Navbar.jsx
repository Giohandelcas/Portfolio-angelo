import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

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
      <div className={styles.navContainer}>
        <div className={styles.logo}>Angelodev</div>

        <div 
          className={`${styles.menuToggle} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div 
          className={`${styles.overlay} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen(false)}
        ></div>

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
      </div>
    </nav>
  );
}

export default Navbar;