import { motion } from "framer-motion";
import styles from "./LoadingScreen.module.scss";

function LoadingScreen() {
  return (
    <motion.div
      className={styles.loader}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, delay: 1 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Angelo Dev
      </motion.h1>
    </motion.div>
  );
}

export default LoadingScreen;