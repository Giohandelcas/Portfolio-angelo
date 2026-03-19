import BlogCard from "../blog/BlogCard";

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
    <div style={{ padding: "120px 8%" }}>

      <h1>Blog</h1>

      <div style={{ marginTop: "40px" }}>

        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}

      </div>

    </div>
  )
}

export default Blog