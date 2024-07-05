import React, { useState } from 'react'

function InputComponent() {
const [name, setName] = useState("");













//make you own input component and render the value below the input component in a Paragraph tag


//practice question

















  return (
    <div>
        <input value={name} placeholder='Enter you name' onChange={e=>setName(e.target.value)} />
    </div>
  )
}

export default InputComponent