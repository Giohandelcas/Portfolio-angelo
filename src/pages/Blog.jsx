import { Helmet } from "react-helmet-async";
import BlogCard from "../blog/BlogCard";

const BASE_URL = "https://angelodelcastillo.com";

function Blog() {

  const posts = [
    {
      title: "Understanding React Hooks",
      slug: "react-hooks"
    },
    {
      title: "JWT Authentication Guide",
      slug: "jwt-auth"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Blog | Angelo Del Castillo</title>
        <meta name="description" content="Articles about web development, React, Node.js and modern JavaScript by Angelo Del Castillo." />
        <link rel="canonical" href={`${BASE_URL}/blog`} />
        <meta property="og:url" content={`${BASE_URL}/blog`} />
        <meta property="og:title" content="Blog | Angelo Del Castillo" />
        <meta property="og:description" content="Articles about web development, React, Node.js and modern JavaScript." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div style={{ padding: "120px 8%" }}>
        <h1>Blog</h1>
        <div style={{ marginTop: "40px" }}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Blog