import React from 'react'

// const Footer = () => {
//     const year=new Date();
//   return (
//     <footer>
//         Copyright &copy; {year.getFullYear()}

//     </footer>
//   )
// }

// export default Footer;

const Footer = ({length}) => {
  const year=new Date();
return (
  <footer>
      {length} List {length==1?"item":"items"}

  </footer>
)
}

export default Footer;