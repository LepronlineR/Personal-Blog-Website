import React from 'react'

const Article = ({ articleParameters }) => {
  const articleName = articleParameters.params.name;
  return (
    <div> This article is named {articleName} </div>
  )
}

export default Article