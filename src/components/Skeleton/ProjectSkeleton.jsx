import styles from "./Skeleton.module.scss";

function ProjectSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.text}></div>
      <div className={styles.text}></div>
    </div>
  );
}

export default ProjectSkeleton;