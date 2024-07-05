import React from 'react'

function PropsDestructuring({name:firstName,age}) {

// const name = props.name;
// const age = props.age;


const name = "akusjgduyad"

// const {name:firstName,age} = props;

// props:{
// name:"",
// age:""
// }


  return (
    <div>
        <p>{name}</p>
        <p>{firstName}</p>
        <p>{age}</p>
    </div>
  )
}

export default PropsDestructuring