import React from 'react'

import temp_image from '../assets/images/fibonacci-naive.png'
//import temp_latex from '../assets/latex/vector_spaces.tex'

const Article = () => {

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

    </div>
  )
}

export default Article