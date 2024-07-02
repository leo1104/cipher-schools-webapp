import styled from 'styled-components'
import About from './About'
import Nav from './Nav';
import Jasd from './Jasd';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from './Home';
import Modal from './Modal';
import HooksConcept from './HooksConcept';
import QuestionAns from './QuestionAns';




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
{/* //we have the component Nav */}


{/* //hwo to take argument in a functional based component  */}

{/* // There will be only 1 argument and the argument will be in an object form */}








const shoppingList =[

{
  title:"1st product",
  desc:"This is 1st product",
  eligibleToBuy:true
},
{
  title:"2nd product",
  desc:"This is 2nd product",
  eligibleToBuy:false
},
{
  title:"3rd product",
  desc:"This is 3rd product",
  eligibleToBuy:true
},

]


//make a component known as card

// map the array of object and pass the data as props

// in props pass title, desc and eligibleToBuy





function qqq(arg1) {
  console.log(arg1);
}


//function inside function











//create a component take a function as a prop inside the component and onClick of a 
//button call the function should have an argument and log the argument from the parent function

//passing a function as prop/argument/parameter to another function




function fun1(arg1) {
  console.log(arg1);
}




//prop is the 1st and only argument that you pass to a functional based component if used as a tag 
//react router dom
{/* //called this function on render */}
{/* <button onClick={qqq("arg1 called")}>Click me</button> */}


{/* <Nav handleClick={fun1}/> */}


{/* //functional based component can also be defined like this: */}
{/* {Nav("qwe","yyye")} */}
{/* {
  shoppingList.map((prod)=>{
    return(<Jasd title={prod.title} desc={prod.desc} eligible={prod.eligibleToBuy}/>)
  })
} */}
{/* //camel case  */}
{/* //onclick event   */}


//createBrowserRouter is a function
//1 argument array of objects

//name of path /home,/about,/...

//whatever we want to render or show to the users comes inside path







//add your own components instead of these div tags in elements


//make your own component and render Ids 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: ":subProdId/about/:prodId",
    element: <Jasd/>,
  },
]);









//convert your app.jsx file from 
// createBrowserRouter to browserRouter tag and add a common component which will be visible in all the routes






console.log("logs rerender");



  return (
    <>
{/* <Nav/>

<RouterProvider router={router} /> */}


{/* <BrowserRouter>


<Nav/>

<Routes>

<Route path= {"/"} element= {<Home/>}/>
<Route path= {"/about"} element= {<About/>}/>

</Routes>
</BrowserRouter> */}













{/* //make a card component with same layout but the inside thing should be inherited or taken from the caller

//it should take variable tags as well and call the card 4 times with different tags */}

{/* children */}

{/* // practice question*/}










{/* <Modal>
<p>1st modal</p>

</Modal>

<Modal>
<h1>2nd modal</h1>

</Modal>
<Modal>

<div>
    <p>
        <span>3rd modal</span>
    </p>
</div>
</Modal>

<Modal>
<section>4th modal</section>

</Modal> */}
<HooksConcept/>

    </>
  )
}

export default App
