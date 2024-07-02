import React, { useState } from 'react'

function QuestionAns() {

    const arrOfObj = [
        {title:"AC",qty:0},
        {title:"Shoes",qty:0},
        {title:"Phone",qty:0},
        ]


        const [temp, setTemp] = useState(arrOfObj);



function handleAdd(index) {
    const tempObj = [...temp];
    tempObj[index].qty = tempObj[index].qty+1
    console.log(tempObj);
    setTemp(tempObj)
}

function handleSubtract(index) {
    const tempObj = [...temp];
    tempObj[index].qty = tempObj[index].qty-1
    console.log(tempObj);
    setTemp(tempObj)
}

  return (
    <div>
        
        {temp.map((prod,index)=>(
            <div>
                <p onClick={()=>handleAdd(index)}>+</p>
                {prod.title}
                {prod.qty}
                <p onClick={()=>handleSubtract(index)}>-</p>
            </div>
        ))}


    </div>
  )
}

export default QuestionAns