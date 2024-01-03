import React from 'react'

// const Header = () => {
//   const headerStyle={backgroundColor:"blue"}
//   return (
//     <header style={headerStyle} >
//         <h1>To Do List</h1>
//     </header>
//   )
// }

// export default Header;


//props its a object we can destructure
// const Header = (props) => {
  
//   return (
//     <header >
//         <h1>{props.title}</h1>
//     </header>
//   )
// }

// export default Header;

// const Header = ({title}) => {
  
//   return (
//     <header >
//         <h1>{title}</h1>
//     </header>
//   )
// }

// export default Header;

//In  props api failed we cannot see the parameter name in front end so


const Header = ({title}) => {
  
  return (
    <header >
        <h1>{title}</h1>
    </header>
  )
}
Header.defaultProps={// if you remove app.js page title style it will work
  title:"To-Do-list "
}

export default Header;

