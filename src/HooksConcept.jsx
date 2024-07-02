import React,{useState} from 'react'



//before intro of hooks we got this issue
//useState hook





function HooksConcept() {


// let a = 5

const [a,setA] = useState(5);

//rerendering the stateful value
function addOne() {
    // a=a+1;
    // console.log(a);

let temp = a;
temp=temp+1;

setA(temp)
    // setA(prev=>prev+1);
}
// console.log(a);
//rerender the page will not happen with variables

const arrOfObj = [
    {title:"AC",qty:0},
    {title:"Shoes",qty:0},
    {title:"Phone",qty:0},
    ]


const [finalObj, setFinalObj] = useState(arrOfObj);

console.log(finalObj);
//make a 
//array of object 

//map the array of object and do the increment and decrement for all the objects qty
//practice question


function addQty(index) {
    console.log(index);

    const temp = [...finalObj]
    temp[index].qty = temp[index].qty+1
    setFinalObj(temp)
}

function minuesQty(index) {
    console.log(index);
}

  return (
    <div>


        {
            finalObj.map((prod,index)=>(
                <div>


                    <button onClick={()=>addQty(index)}>Add</button>
                    <p>{prod.title}</p>
                    <p>{prod.qty}</p>
                    <button onClick={()=>minuesQty(index)}>Subtract</button>
                </div>
            ))
        }
{/* {a}
<button onClick={addOne}>Click to +1 to the above count</button> */}

    </div>
  )
}

export default HooksConcept