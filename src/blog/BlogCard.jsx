import { Link } from "react-router-dom"
import styles from "./BlogCard.module.scss"

function BlogCard({ post }) {

  return (
    <Link to={`/blog/${post.slug}`} className={styles.card}>

      <h3>{post.title}</h3>

      <p>Read article →</p>

    </Link>
  )

}

export default BlogCard