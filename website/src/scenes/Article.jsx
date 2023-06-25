import React from 'react'
import { MathJax, MathJaxContext } from "better-react-mathjax";

import image from '../assets/images/fibonacci-naive.png'
import latex from '../assets/latex/algorithms.tex'

const Article = () => {

  const config = {
    loader: { load: ["[tex]/html"]},
    tex: {
      packages: { "[+]": ["html"]},
      inlineMath: [["$", "$"]],
      displayMath: [["$$", "$$"]]
    }
  }

  const equation = "$x+y^2 = z$";

  return (
    <MathJaxContext version={3} config={config}>
          <h2>Basic MathJax example with Latex</h2>
          <MathJax>{equation}</MathJax>
    </MathJaxContext>
  )
}

export default Article