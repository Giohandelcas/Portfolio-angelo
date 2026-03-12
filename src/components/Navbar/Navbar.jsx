import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Angelo Dev</div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
}

export default Navbar;