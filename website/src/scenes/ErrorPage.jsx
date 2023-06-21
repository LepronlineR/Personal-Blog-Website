import React from 'react'

const ErrorPage = () => {
  return (
    <div className="flex h-screen">
        <div className="m-auto text-center">
            <h1 className="text-[8rem]">
                Whoops
            </h1>
            <h2 className="text-xl">
                This page does not exist or something unexpected happened.
            </h2>
        </div>
    </div>
  )
}

export default ErrorPage