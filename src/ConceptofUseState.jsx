import React, { useState } from 'react'

function ConceptofUseState() {

// let a =2;
//rerendering on change of the value of a variable

const [a,setA] =useState(2);


function addOne() {
    setA(a+1)
}

  return (
    <div>
        
        <p>{a}</p>
        <button onClick={addOne}>+1</button>
        </div>
  )
}

export default ConceptofUseState