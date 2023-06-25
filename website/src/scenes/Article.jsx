import React from 'react'
import { MathJax, MathJaxContext } from "better-react-mathjax";

import image from '../assets/images/fibonacci-naive.png'
//import latex from '../assets/latex/algorithms.tex'

const Article = () => {

  const equation = "$x+y^2 = z$";

  return (
    <MathJaxContext>
          <h2>Basic MathJax example with Latex</h2>
          <MathJax>{equation}</MathJax>
    </MathJaxContext>
  )
}

export default Article

/*<div>
      { / Title /}
      <div class="bg-[url(https://placekitten.com/700)] h-[600px] w-[600px] relative">
        <div class="absolute bottom-0 bg-gray-500/50 w-full">
          <h1 class="text-white font-semibold text-4xl"> Kittens are cute </h1>
        </div>
      </div>

      { / Body /}

    </div>*/