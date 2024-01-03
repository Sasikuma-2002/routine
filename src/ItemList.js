import React from 'react'
import LineItem from './LineItem';

// const ItemList = ({items,handleCheck,handleDelete}) => {
//   return (
//     <ul>
//               {items.map((item)=>(
//                 <li className='item' key={item.id}>
//                   <input  type='checkbox'
//                    onChange={()=>handleCheck(item.id)}
//                   checked={item.checked}
//                   />
//                   <label
//                   style={(item.checked)?{textDecoration:'line-through'}:null}
//                    onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
//                   <FaTrashAlt
//                       role='button'
//                       onClick={()=>handleDelete(item.id)}
//                       tabIndex="0"
                  
//                    />
//                 </li>
           
//               ))}
//              </ul>
//   )
// }

// export default ItemList;

//again make anaother componen
const ItemList = ({items,handleCheck,handleDelete}) => {
    return (
      <ul>
                {items.map((item)=>(
                  <LineItem
                    item={item}//input map is item here
                    key={item.id}//error show in command because child know key 
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                  />
             
                ))}
    </ul>
    )
  }
  
  export default ItemList;
