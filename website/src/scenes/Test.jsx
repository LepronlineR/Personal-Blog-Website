import { React, useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'

const Test = () => {

  const [markdown, setMarkdown] = useState("");

  // fetch markdown
  useEffect(() => {
    import(`../assets/markdown/test.md`)
      .then(file => {
        fetch(file.default)
          .then(file => file.text())
          .then(file => setMarkdown(file))
          .catch(error => console.log(error))
      }).catch(error => console.log(error))
  });

  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[ remarkGfm, remarkMath ]}
        rehypePlugins={[ rehypeKatex ]}
        className="whitespace-pre p-48 max-w-none bg-[#ABABAB] prose"
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default Test