import React from 'react'
import { Link } from 'react-router-dom';
//props
function Nav(arg1,arg2) {
//SPA
//destructure the props/argument coming
console.log(arg1,arg2);

// const {name,age,isTeacher} = props //destructuring


  return (
    <div>
      {/* <button onClick={()=>handleClick("heyyy")}>Click me</button> */}
    <Link to={'/'}>Home page</Link>
    <Link to={'/about'}>About page</Link>
    </div>
  )
}

export default Nav