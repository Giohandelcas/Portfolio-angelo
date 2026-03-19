import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react"

const BASE_URL = "https://angelodelcastillo.com";

const postMeta = {
  "react-hooks": {
    title: "Understanding React Hooks",
    description: "A complete guide to React Hooks: useState, useEffect, useContext and custom hooks explained with practical examples.",
  },
  "jwt-auth": {
    title: "JWT Authentication Guide",
    description: "Learn how to implement JWT authentication in Node.js and React applications securely.",
  },
};

function BlogPost() {

  const { slug } = useParams()
  const [content, setContent] = useState("")

  const meta = postMeta[slug] ?? { title: "Blog | Angelo Del Castillo", description: "" };

  useEffect(() => {
    fetch(`/src/blog/posts/${slug}.md`)
      .then(res => res.text())
      .then(text => setContent(text))
  }, [slug])

  return (
    <>
      <Helmet>
        <title>{`${meta.title} | Angelo Del Castillo`}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`${BASE_URL}/blog/${slug}`} />
        <meta property="og:url" content={`${BASE_URL}/blog/${slug}`} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": meta.title,
          "description": meta.description,
          "url": `${BASE_URL}/blog/${slug}`,
          "author": {
            "@type": "Person",
            "name": "Angelo Del Castillo",
            "url": BASE_URL,
          },
        })}</script>
      </Helmet>

      <div style={{ padding: "120px 8%", maxWidth: "800px", margin: "auto" }}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </>
  )

}

export default BlogPost