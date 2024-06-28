import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        {/* <a href='/about'>ABout</a> */}
        <Link to={'/about'}>About</Link>
    </div>
  )
}

export default Home