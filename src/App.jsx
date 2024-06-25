import styled from 'styled-components'
import About from './About'
import Nav from './Nav';


const Button = styled.button`
background-color: red;
border-radius: 20px;
`
function App() {

//make an array and render the elements of the array on the webpage
// const arr = [1,2,3,"Array"]




//I want to show/render the elements of the array on the webpage 


//you cannot use loops, conditional statements in return part of the component(it should be one liners)


//iterate through the array

// forEach 
//map


//component


// what is the diff btw forEach and map 


// const newA = arr.forEach((ele)=>{return ele})
// const newA = arr.map((ele)=>{return ele})

//backend API the data will be coming in this format
const arr =[
  {name:"JJ",age:23},
  {name:"KK",age:20},
  {name:"AA",age:19},  
  {name:"BB",age:25},
  {name:"CC",age:27},
  {name:"D",age:28},
  {name:"E",age:29},
  {name:"F",age:30},
  {name:"I",age:23},
];


//render the name and age on the webpage and wrap the name and age in a paragraph tag individually


//destructuring an object


const obj = {
  a:"heyy",
  key2:"Byee",
};

const a =20;

const {a:newName,key2} = obj;

// const newName = obj[a];


// console.log(newName)


// const {a,key2} = obj; //=> destructurting 








function fun1({name,age},b) {
  // const {name,age} = obj1;
  // console.log(name,age);
}


const obj1={
  name:"Prantosh",
  age:35,
}


fun1(obj1,4)


// destructure obj1 in the function fun1






















  return (
    <>
{/* //we have the component Nav */}


{/* //hwo to take argument in a functional based component  */}

{/* // There will be only 1 argument and the argument will be in an object form */}

<Nav name={"Prantosh"} age={25} isTeacher={true} />
    </>
  )
}

export default App
