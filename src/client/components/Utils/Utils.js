import React from 'react';
import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Utils.css';

export const AppLogo = () => {
  return <div className="logo"><Link to='/'>React</Link></div>;
};

export function Item(item,index){
  const array= Object.keys(item)
  return (
    <li className="item" key={index}>
      {array.map((property,i)=><span key={i}>{item[property]}</span>)}
    </li>
    
  )
}

// export function Item(item,index,handleDelete){
//   const {id,title}= item
//   return (
//     <li className="item" key={index}>
//       <span>{title}</span>
//       <button 
//         id={id}
//         className="btn-remove"
//         onClick={()=>handleDelete(id)}
//       >
//         <FontAwesomeIcon className="control-icon" icon="trash"/>
//       </button>
//     </li>
    
//   )
// }