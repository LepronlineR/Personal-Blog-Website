import {React, useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'

import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

import temp_image from '../assets/images/fibonacci-naive.png'

const Article = () => {

  const fileName = "test.md"
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    import(`../assets/markdown/${fileName}`)
      .then(file => {
        fetch(file.default)
          .then(file => file.text())
          .then(file => setMarkdown(file))
          .catch(error => console.log(error))
      }).catch(error => console.log(error))
  });

  return (
    <div>
      { /* header */ }
      <div
      className="relative overflow-hidden bg-cover bg-no-repeat h-[700px]">
        <img
          src={temp_image}
          className="object-fill"
          alt="missing"/>
        <div
          class="absolute bottom-0 left-0 right-0 top-0 h-full w-full 
          overflow-hidden bg-fixed bg-dimmed-background">
          <div className="flex h-full items-center justify-center">
            { /* Title of the article */}
            <h1 className="text-white opacity-100 text-6xl font-rubik">
              Title of this article
            </h1>
          </div>
        </div>
      </div>

      { /* content */}
      <ReactMarkdown 
        remarkPlugins={[ remarkMath ]}
        rehypePlugins={[ rehypeKatex ]}
        className="text-white p-12"
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default Article