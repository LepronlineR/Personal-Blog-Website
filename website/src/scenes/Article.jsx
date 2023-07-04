import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import articleJson from '../assets/article_names.json'


const Article = () => {

  const { postId } = useParams();
  const numPostId = parseInt(postId);

  const article = articleJson.find(num => num.article_id === numPostId);

  const mardownFileName = article.article_markdown
  const [markdown, setMarkdown] = useState("");

  const imageFileName = article.article_image
  const [image, setImage] = useState("")

  // fetch markdown
  useEffect(() => {
    import(`../assets/markdown/${mardownFileName}`)
      .then(file => {
        fetch(file.default)
          .then(file => file.text())
          .then(file => setMarkdown(file))
          .catch(error => console.log(error))
      }).catch(error => console.log(error))
  });

  // fetch image
  useEffect(() => {
    import(`../assets/images/${imageFileName}`)
    .then(file => setImage(file.default))
    .catch(error => console.log(error))
  });

  return (
    <div>
      { /* header */ }
      <div
      className="relative overflow-hidden bg-cover bg-no-repeat h-[700px] items-center">
        <img
          src={image}
          className="object-fill justify-center"
          alt="missing"/>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full 
          overflow-hidden bg-fixed bg-dimmed-background">
          <div className="flex h-full items-center justify-center">
            { /* Title of the article */}
            <h1 className="text-white opacity-100 text-6xl font-rubik">
              {article.article_name}
            </h1>
          </div>
        </div>
      </div>

      { /* content */}
      <ReactMarkdown
        remarkPlugins={[ remarkGfm, remarkMath ]}
        rehypePlugins={[ rehypeKatex ]}
        className="text-white p-48 prose"
        children={markdown}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                style={dark}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          }
        }}
      />,
    </div>
  )
}

export default Article