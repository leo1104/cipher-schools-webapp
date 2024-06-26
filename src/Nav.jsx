import React from 'react'
//props
function Nav({handleClick}) {

//destructure the props/argument coming


// const {name,age,isTeacher} = props //destructuring


  return (
    <div>
      <button onClick={()=>handleClick("heyyy")}>Click me</button>
    </div>
  )
}

export default Nav