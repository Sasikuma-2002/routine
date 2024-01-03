import React from 'react'
// import { useState } from 'react';
// import {FaTrashAlt} from "react-icons/fa";
import ItemList from './ItemList';

// const Content = () => {
//     function handleNameChange()
//   {
//     const names=["Earn","Grow","Give"];
//     const int =Math.floor(Math.random()*3);
//     return names[int];
//   }
//   const handleClick=()=>{
//     console.log("Thanks for subscribe")
//   }
//   const handleClick2=(name)=>{
//     console.log(`Thanks for subscribe ${name}`)
//   }
//   return (
//     <main>
//             <p>Lets {handleNameChange()} Money</p>
//             {/* <button onClick={handleClick}>Sunscribe</button>  */}
//             <button onClick={()=>handleClick2("sasisanjay")}>Sunscribe</button> 
//     </main>
//   )
// }

// export default Content;


//we can give without parameter like {handleClick}
//we can't able to create parameter like handleClick() if we pass para below method ananymous method use
//so

// const Content = () => {
//   function handleNameChange()
// {
//   const names=["Earn","Grow","Give"];
//   const int =Math.floor(Math.random()*3);
//   return names[int];
// }
// const handleClick=(e)=>{
//   console.log(e)
// }
// const handleClick2=(name)=>{
//   console.log(`Thanks for subscribe ${name}`)
// }
// return (
//   <main>
//           <p>Lets {handleNameChange()} Money</p>
//           {/* <button onClick={handleClick}>Sunscribe</button>  */}
//           <button onClick={(e)=>handleClick(e)}>Sunscribe</button> 
//   </main>
// )
// }

// export default Content;

//this code just show the event has happened in console

// const Content = () => {
//   function handleNameChange()
// {
//   const names=["Earn","Grow","Give"];
//   const int =Math.floor(Math.random()*3);
//   return names[int];
// }
// const handleClick=(e)=>{
//   console.log(e.target)
// }
// const handleClick2=(name)=>{
//   console.log(`Thanks for subscribe ${name}`)
// }
// return (
//   <main>
//           <p>Lets {handleNameChange()} Money</p>
//           {/* <button onClick={handleClick}>Sunscribe</button>  */}
//           <button onClick={(e)=>handleClick(e)}>Sunscribe</button> 
//   </main>
// )
// }

// export default Content;

//in this code target button has printed 


// const Content = () => {
//   function handleNameChange()
// {
//   const names=["Earn","Grow","Give"];
//   const int =Math.floor(Math.random()*3);
//   return names[int];
// }
// const handleClick=(e)=>{
//   console.log(e.target.innerText)
// }
// const handleClick2=(name)=>{
//   console.log(`Thanks for subscribe ${name}`)
// }
// return (
//   <main>
//           <p>Lets {handleNameChange()} Money</p>
//           {/* <button onClick={handleClick}>Sunscribe</button>  */}
//           <button onClick={(e)=>handleClick(e)}>Sunscribe</button> 
//   </main>
// )
// }

// export default Content;

//double click


// const Content = () => {
//   function handleNameChange()
// {
//   const names=["Earn","Grow","Give"];
//   const int =Math.floor(Math.random()*3);
//   return names[int];
// }
// const handleClick=(e)=>{
//   console.log(e.target.innerText)
// }
// const handleClick2=(name)=>{
//   console.log(`Thanks for subscribe ${name}`)
// }
// return (
//   <main>
//           <p onDoubleClick={()=>handleClick2('sasi')}>
//             Lets {handleNameChange()} Money</p>
//           {/* <button onClick={handleClick}>Sunscribe</button>  */}
//           <button onClick={(e)=>handleClick(e)}>Sunscribe</button> 
//   </main>
// )
// }

// export default Content;



//use state hook for no reloading page
//inside class we can't use hook method
//inside if condition we can't declare hook state
//initial value will print
// 

// const Content = () => {
//   function handleNameChange()
// {
//   const names=["Earn","Grow","Give"];
//   const int =Math.floor(Math.random()*3);
//   return names[int];
// }
// const [count,setCount]=useState(99);

// function incrementFun()
// {
//   setCount(count + 1);
// }
// function decrementFun()
// {
//   setCount(count - 1)
// }
// return (
//   <main>
//           <p>
//             Lets Earn Money</p>
//           {/* <button onClick={handleClick}>Sunscribe</button>  */}
//           <button>Sunscribe</button> 
//           <button onClick={decrementFun}>-</button>
//           <span>{count}</span>
//           <button onClick={incrementFun}>+</button>
//   </main>
// )
// }

// export default Content;


//in dosent change only print one increment
// const Content = () => {
//   function handleNameChange()
// {
//   const names=["Earn","Grow","Give"];
//   const int =Math.floor(Math.random()*3);
//   return names[int];
// }
// const [count,setCount]=useState(99);

// function incrementFun()
// {
//   setCount(count + 1);
//   setCount(count + 1)
//   setCount(count + 1)
// }
// function decrementFun()
// {
//   setCount(count - 1)
// }
// return (
//   <main>
//           <p>
//             Lets Earn Money</p>
//           {/* <button onClick={handleClick}>Sunscribe</button>  */}
//           <button>Sunscribe</button> 
//           <button onClick={decrementFun}>-</button>
//           <span>{count}</span>
//           <button onClick={incrementFun}>+</button>
//   </main>
// )
// }

// export default Content;


// add multiply of 3
// const Content = () => {
//   function handleNameChange()
// {
//   const names=["Earn","Grow","Give"];
//   const int =Math.floor(Math.random()*3);
//   return names[int];
// }
// const [count,setCount]=useState(99);

// function incrementFun()
// {
//   setCount((count)=>{return count + 1});
//   setCount((count)=>{return count + 1});
//   setCount((count)=>{return count + 1});
// }
// function decrementFun()
// {
//   setCount(count - 1)
// }
// return (
//   <main>
//           <p>
//             Lets Earn Money</p>
//           {/* <button onClick={handleClick}>Sunscribe</button>  */}
//           <button>Sunscribe</button> 
//           <button onClick={decrementFun}>-</button>
//           <span>{count}</span>
//           <button onClick={incrementFun}>+</button>
//   </main>
// )
// }

// export default Content;


// const Content = () => {
//   function handleNameChange()
// {
//   const names=["Earn","Grow","Give"];
//   const int =Math.floor(Math.random()*3);
//   return names[int];
// }
// function namee(){
//   return console.log("Hello wecome");
// }
// const [count,setCount]=useState(99);
// const [name,setName]=useState(namee());// it was called first  and print if any button clicked it was called

// function incrementFun()
// {
//   setCount( count + 1);
 
// }
// function decrementFun()
// {
//   setCount(count - 1)
// }
// return (
//   <main>
//           <p>
//             Lets Earn Money</p>
//           {/* <button onClick={handleClick}>Sunscribe</button>  */}
//           <button>Sunscribe</button> 
//           <button onClick={decrementFun}>-</button>
//           <span>{count}</span>
//           <button onClick={incrementFun}>+</button>
//   </main>
// )
// }

// export default Content;

//so use, anamyous function
//it was only called first wont work after any button press
//avoid object in setstate
// const Content = () => {
//   function handleNameChange()
// {
//   const names=["Earn","Grow","Give"];
//   const int =Math.floor(Math.random()*3);
//   return names[int];
// }
// function namee(){
//   return console.log("Hello wecome");
// }
// const [count,setCount]=useState(99);
// const [name,setName]=useState(()=>namee());// it was called first 

// function incrementFun()
// {
//   setCount( count + 1);
 
// }
// function decrementFun()
// {
//   setCount(count - 1)
// }
// return (
//   <main>
//           <p>
//             Lets Earn Money</p>
//           {/* <button onClick={handleClick}>Sunscribe</button>  */}
//           <button>Sunscribe</button> 
//           <button onClick={decrementFun}>-</button>
//           <span>{count}</span>
//           <button onClick={incrementFun}>+</button>
//   </main>
// )
// }

// export default Content;



// const Content = () => {
//   function handleNameChange()
// {
//   const names=["Earn","Grow","Give"];
//   const int =Math.floor(Math.random()*3);
//   setName( names[int]);
// }
// const [name,setName]=useState("Earn")// default value

// return (
//   <main>
//           <p>Lets {name} Money</p>
        
//           <button onClick={handleNameChange}>Sunscribe</button> 
//   </main>
// )
// }

// export default Content;


//react LIST AND KEYS

// const Content = () => {
//  const [items,setItems]=useState(
//   [
//     {
//       id:1,
//       checked:true,
//       item:"practice coding"
//     },
//     {
//       id:2,
//       checked:false,
//       item:"practice cric"
//     },
//     {
//       id:3,
//       checked:false,
//       item:"practice foodball"
//     }
//   ]
//  );
// //  const numbers=[-2,-1,0,1,2];
// //  const itemes=numbers.map(n=>({number:n}))
// //  console.log(itemes);

// // const numbers=[-2,-1,0,1,2];
// //  const itemes=numbers.filter(n=>n>=0).map(n=>({number:n}))
// //  console.log(itemes);

// // const numbers=[-2,-1,0,1,2];
// //  const itemes=numbers.filter(n=>n>=0)
// //  console.log(itemes);

// return (
//   <main>
//            <ul>
//             {items.map((item)=>(
//               <li className='item' key={item.id}>
//                 <input type='checkbox'
//                 checked={item.checked}/>
//                 <label>{item.item}</label>
//                 <FaTrashAlt
//                     role='button'
//                     tabIndex="0"
                
//                  />
//               </li>
         
//             ))}
//            </ul>
//   </main>
// )
// }

// export default Content;



//onchange check box

// const Content = () => {
//   const [items,setItems]=useState(
//    [
//      {
//        id:1,
//        checked:true,
//        item:"practice coding"
//      },
//      {
//        id:2,
//        checked:false,
//        item:"practice cric"
//      },
//      {
//        id:3,
//        checked:false,
//        item:"practice foodball"
//      }
//    ]
//   );
//  //  const numbers=[-2,-1,0,1,2];
//  //  const itemes=numbers.map(n=>({number:n}))
//  //  console.log(itemes);
 
//  // const numbers=[-2,-1,0,1,2];
//  //  const itemes=numbers.filter(n=>n>=0).map(n=>({number:n}))
//  //  console.log(itemes);
 
//  // const numbers=[-2,-1,0,1,2];
//  //  const itemes=numbers.filter(n=>n>=0)
//  //  console.log(itemes);
//  const handleCheck=(id)=>{
//   const listItems=items.map((item)=>item.id===id?{checked:!item.checked}:item)
//   setItems(listItems)
//   //console.log(`id: ${id}`)
//  }
//  return (
//    <main>
//             <ul>
//              {items.map((item)=>(
//                <li className='item' key={item.id}>
//                  <input type='checkbox'
//                   onChange={()=>handleCheck(item.id)}
//                  checked={item.checked}
//                  />
//                  <label>{item.item}</label>
//                  <FaTrashAlt
//                      role='button'
//                      tabIndex="0"
                 
//                   />
//                </li>
          
//              ))}
//             </ul>
//    </main>
//  )
//  }
 
//  export default Content;


//item will print 
// const Content = () => {
//   const [items,setItems]=useState(
//    [
//      {
//        id:1,
//        checked:true,
//        item:"practice coding"
//      },
//      {
//        id:2,
//        checked:false,
//        item:"practice cric"
//      },
//      {
//        id:3,
//        checked:false,
//        item:"practice foodball"
//      }
//    ]
//   );
//  //  const numbers=[-2,-1,0,1,2];
//  //  const itemes=numbers.map(n=>({number:n}))
//  //  console.log(itemes);
 
//  // const numbers=[-2,-1,0,1,2];
//  //  const itemes=numbers.filter(n=>n>=0).map(n=>({number:n}))
//  //  console.log(itemes);
 
//  // const numbers=[-2,-1,0,1,2];
//  //  const itemes=numbers.filter(n=>n>=0)
//  //  console.log(itemes);
//  const handleCheck=(id)=>{
//   const listItems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
//   setItems(listItems)
//   //console.log(`id: ${id}`)
//  }
// //  const handleDelete=(id)=>{
// //   const listItems=items.map((item)=>item.id!==id)
// //   setItems(listItems)//emptyarray
// //  }
// const handleDelete=(id)=>{
//   const listItems=items.filter((item)=>item.id!==id)
//   setItems(listItems)
//  }
//  return (
//    <main>
//             <ul>
//              {items.map((item)=>(
//                <li className='item' key={item.id}>
//                  <input type='checkbox'
//                   onChange={()=>handleCheck(item.id)}
//                  checked={item.checked}
//                  />
//                  <label>{item.item}</label>
//                  <FaTrashAlt
//                      role='button'
//                      onClick={()=>handleDelete(item.id)}
//                      tabIndex="0"
                 
//                   />
//                </li>
          
//              ))}
//             </ul>
//    </main>
//  )
//  }
 
//  export default Content;


//storage for remaining print 
// const Content = () => {
//   const [items,setItems]=useState(
//    [
//      {
//        id:1,
//        checked:true,
//        item:"practice coding"
//      },
//      {
//        id:2,
//        checked:false,
//        item:"practice cric"
//      },
//      {
//        id:3,
//        checked:false,
//        item:"practice foodball"
//      }
//    ]
//   );
//  //  const numbers=[-2,-1,0,1,2];
//  //  const itemes=numbers.map(n=>({number:n}))
//  //  console.log(itemes);
 
//  // const numbers=[-2,-1,0,1,2];
//  //  const itemes=numbers.filter(n=>n>=0).map(n=>({number:n}))
//  //  console.log(itemes);
 
//  // const numbers=[-2,-1,0,1,2];
//  //  const itemes=numbers.filter(n=>n>=0)
//  //  console.log(itemes);
//  const handleCheck=(id)=>{
//   const listItems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
//   setItems(listItems)
//   localStorage.setItem("todo_list".JSON.stringify(listItems))
//   //console.log(`id: ${id}`)
//  }
// //  const handleDelete=(id)=>{
// //   const listItems=items.map((item)=>item.id!==id)
// //   setItems(listItems)//emptyarray
// //  }
// const handleDelete=(id)=>{
//   const listItems=items.filter((item)=>item.id!==id)
//   setItems(listItems)
//   localStorage.setItem("todo_list".JSON.stringify(listItems))

//  }
//  return (
//    <main>
//             <ul>
//              {items.map((item)=>(
//                <li className='item' key={item.id}>
//                  <input type='checkbox'
//                   onChange={()=>handleCheck(item.id)}
//                  checked={item.checked}
//                  />
//                  <label>{item.item}</label>
//                  <FaTrashAlt
//                      role='button'
//                      onClick={()=>handleDelete(item.id)}
//                      tabIndex="0"
                 
//                   />
//                </li>
          
//              ))}
//             </ul>
//    </main>
//  )
//  }
 
//  export default Content;


//label double click
// const Content = () => {
//   const [items,setItems]=useState(
//    [
//      {
//        id:1,
//        checked:true,
//        item:"practice coding"
//      },
//      {
//        id:2,
//        checked:false,
//        item:"practice cric"
//      },
//      {
//        id:3,
//        checked:false,
//        item:"practice foodball"
//      }
//    ]
//   );
//  //  const numbers=[-2,-1,0,1,2];
//  //  const itemes=numbers.map(n=>({number:n}))
//  //  console.log(itemes);
 
//  // const numbers=[-2,-1,0,1,2];
//  //  const itemes=numbers.filter(n=>n>=0).map(n=>({number:n}))
//  //  console.log(itemes);
 
//  // const numbers=[-2,-1,0,1,2];
//  //  const itemes=numbers.filter(n=>n>=0)
//  //  console.log(itemes);
//  const handleCheck=(id)=>{
//   const listItems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
//   setItems(listItems)
//   // localStorage.setItem("todo_list".JSON.stringify(listItems))
//   //console.log(`id: ${id}`)
//  }
// //  const handleDelete=(id)=>{
// //   const listItems=items.map((item)=>item.id!==id)
// //   setItems(listItems)//emptyarray
// //  }
// const handleDelete=(id)=>{
//   const listItems=items.filter((item)=>item.id!==id)
//   setItems(listItems)
//   // localStorage.setItem("todo_list".JSON.stringify(listItems))

//  }
//  return (
//    <main>
//             <ul>
//              {items.map((item)=>(
//                <li className='item' key={item.id}>
//                  <input type='checkbox'
//                   onChange={()=>handleCheck(item.id)}
//                  checked={item.checked}
//                  />
//                  <label onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
//                  <FaTrashAlt
//                      role='button'
//                      onClick={()=>handleDelete(item.id)}
//                      tabIndex="0"
                 
//                   />
//                </li>
          
//              ))}
//             </ul>
//    </main>
//  )
//  }
 
//  export default Content;


//props and props drilling// multiple header in different page //passing parameter
//styling


//go to header content


// const Content = () => {
//   const [items,setItems]=useState(
//    [
//      {
//        id:1,
//        checked:true,
//        item:"practice coding"
//      },
//      {
//        id:2,
//        checked:false,
//        item:"practice cric"
//      },
//      {
//        id:3,
//        checked:false,
//        item:"practice foodball"
//      }
//    ]
//   );
//  //  const numbers=[-2,-1,0,1,2];
//  //  const itemes=numbers.map(n=>({number:n}))
//  //  console.log(itemes);
 
//  // const numbers=[-2,-1,0,1,2];
//  //  const itemes=numbers.filter(n=>n>=0).map(n=>({number:n}))
//  //  console.log(itemes);
 
//  // const numbers=[-2,-1,0,1,2];
//  //  const itemes=numbers.filter(n=>n>=0)
//  //  console.log(itemes);
//  const handleCheck=(id)=>{
//   const listItems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
//   setItems(listItems)
//   // localStorage.setItem("todo_list".JSON.stringify(listItems))
//   //console.log(`id: ${id}`)
//  }
// //  const handleDelete=(id)=>{
// //   const listItems=items.map((item)=>item.id!==id)
// //   setItems(listItems)//emptyarray
// //  }
// const handleDelete=(id)=>{
//   const listItems=items.filter((item)=>item.id!==id)
//   setItems(listItems)
//   // localStorage.setItem("todo_list".JSON.stringify(listItems))

//  }
//  return (
//    <main>
//       {(items.length)?(
//             <ul>
//              {items.map((item)=>(
//                <li className='item' key={item.id}>
//                  <input  type='checkbox'
//                   onChange={()=>handleCheck(item.id)}
//                  checked={item.checked}
//                  />
//                  <label
//                  style={(item.checked)?{textDecoration:'line-through'}:null}
//                   onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
//                  <FaTrashAlt
//                      role='button'
//                      onClick={()=>handleDelete(item.id)}
//                      tabIndex="0"
                 
//                   />
//                </li>
          
//              ))}
//             </ul>
//       ):(
//         <p style={{marginTop:"2rem"}}>Your list is empty</p>
//       )
// }
//    </main>
//  )
//  }
 
//  export default Content; 



 //sibling traansfer sibling component data , so child to parent com sava and then call it(content and footer )siblings and (app)parenr
 //content object length show in footer
 //check app.js

//  const Content = ({items,handleCheck,handleDelete}) => {
 
//  return (
//    <main>
//       {(items.length)?(
//             <ul>
//              {items.map((item)=>(
//                <li className='item' key={item.id}>
//                  <input  type='checkbox'
//                   onChange={()=>handleCheck(item.id)}
//                  checked={item.checked}
//                  />
//                  <label
//                  style={(item.checked)?{textDecoration:'line-through'}:null}
//                   onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
//                  <FaTrashAlt
//                      role='button'
//                      onClick={()=>handleDelete(item.id)}
//                      tabIndex="0"
                 
//                   />
//                </li>
          
//              ))}
//             </ul>
//       ):(
//         <p style={{marginTop:"2rem"}}>Your list is empty</p>
//       )
// }
//    </main>
//  )
//  }
 
//  export default Content;

//ItemList.js check
const Content = ({items,handleCheck,handleDelete}) => {
 
  return (
    <main>
       {(items.length)?(
               <ItemList
                 items={items}
                 handleCheck={handleCheck}
                 handleDelete={handleDelete}
               />
       ):(
         <p style={{marginTop:"2rem"}}>Your list is empty</p>
       )
 }
    </main>
  )
  }
  
  export default Content;
 
