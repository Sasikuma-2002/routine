import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react';
import SearchItem from "./SearchItem";


// function App()
// {
//   function handleNameChange()
//   {
//     const names=["Earn","Grow","Give"];
//     const int =Math.floor(Math.random()*3);
//     return names[int];
//   }
  
//   return(
//     <div>
//       sk new app
//       <p>Lets Earn Money</p>
//       <p>Lets {handleNameChange()} Money</p>
//     </div>
//   );
// }
// export default App;

// function App()
// {
  
//   return( 
//     <div className="App">
//      <Header title="sasi" />
//      <Content />
//      <Footer />
//     </div>
//   );
// }
// export default App;



//sibling data share 
// function App(){
// const [items,setItems]=useState(
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
// const handleCheck=(id)=>{
//  const listItems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
//  setItems(listItems)
//  // localStorage.setItem("todo_list".JSON.stringify(listItems))
//  //console.log(`id: ${id}`)
// }
// //  const handleDelete=(id)=>{
// //   const listItems=items.map((item)=>item.id!==id)
// //   setItems(listItems)//emptyarray
// //  }
// const handleDelete=(id)=>{
//  const listItems=items.filter((item)=>item.id!==id)
//  setItems(listItems)
//  // localStorage.setItem("todo_list".JSON.stringify(listItems))

// }
// return( 
//       <div className="App">
//        <Header title="sasi" />
//        <AddItem />
//        <Content
//           items={items}
//           // setItems={setItems}
//           handleCheck={handleCheck}
//           handleDelete={handleDelete}
//        />
//        <Footer
//          length={items.length}
//        />
//       </div>
//     );
//   }
//   export default App;


//AddItem.js

function App(){
  const [items,setItems]=useState(JSON.parse(localStorage.getItem('todo_list'))
  
   );
   const[newItem, setNewItem]=useState('')

   const [search,setSearch]=useState('')

   const addItem=(item)=>{  // for adding item to be stored
      const id=items.length?items[items.length-1].id+1:1  //for unique sec exp //1 for new object
      const addNewItem={id,checked:false,item} // maintain the object struct
      const listItems=[...items,addNewItem]
      setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(listItems))
   }
 
  const handleCheck=(id)=>{
   const listItems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
   setItems(listItems)
   localStorage.setItem("todo_list",JSON.stringify(listItems))
   //console.log(`id: ${id}`)
  }
 
  const handleDelete=(id)=>{
   const listItems=items.filter((item)=>item.id!==id)
   setItems(listItems)
   localStorage.setItem("todo_list",JSON.stringify(listItems))
  
  }
  const handleSubmit=(e)=>{
      //form default behaviour will load after enter so use prevent default
      e.preventDefault()
      if(!newItem) return ;
      console.log("submitted")
     
      addItem(newItem)
      setNewItem('')
  }
  return( 
        <div className="App">
          <h1 >Welcome</h1>
         <Header title="To Do List" />
        <AddItem  
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        
        />
        <SearchItem 
          search={search}
          setSearch={setSearch}
        />
         <Content
            items={items.filter(item=>(item.item).toLowerCase().includes(search.toLowerCase()))}
            // setItems={setItems}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
         />
         <Footer
           length={items.length}
         />
        </div>
      );
    }
    export default App;