import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react"

function BlogPost() {

  const { slug } = useParams()

  const [content, setContent] = useState("")

  useEffect(() => {

    fetch(`/src/blog/posts/${slug}.md`)
      .then(res => res.text())
      .then(text => setContent(text))

  }, [slug])

  return (

    <div style={{ padding: "120px 8%", maxWidth: "800px", margin: "auto" }}>

      <ReactMarkdown>
        {content}
      </ReactMarkdown>

    </div>

  )

}

export default BlogPost