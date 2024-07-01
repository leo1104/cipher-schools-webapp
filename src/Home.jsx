import React from 'react'
import { Link } from 'react-router-dom'

function Home({children}) {
  return (
    <div>
        {/* <a href='/about'>ABout</a> */}
      {children}
    </div>
  )
}

export default Home