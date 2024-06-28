import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
function Jasd() {


const {prodId,subProdId} = useParams();

const [searchParams] = useSearchParams();
const name = searchParams.get('name')
const age = searchParams.get('age')


//make your own search params and render the output


//10 minutes break

  return (
    <>
    {/* This is the JASD {prodId} {subProdId} */}
    this is my name : {name}, {age}
    </>
  )
}

export default Jasd