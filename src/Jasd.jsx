import React from 'react'
import { useParams } from 'react-router-dom';
function Jasd() {


const {prodId,subProdId} = useParams();

  return (
    <>
    This is the JASD {prodId} {subProdId}
    </>
  )
}

export default Jasd