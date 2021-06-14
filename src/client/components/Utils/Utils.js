import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Utils.css';

export const AppLogo = () => {
  return <div className="logo"><Link to='/'>React</Link></div>;
};

export const TodosCount=(list)=>{
    return <span>Total: {list.length}</span>;
}

export function Item(item,index,handleDelete){
  const {id,title}= item
  return (
    <li className="item" key={index}>
      <span>{title}</span>
      <button 
        id={id}
        className="btn-remove"
        onClick={()=>handleDelete(id)}
      >
        <FontAwesomeIcon className="control-icon" icon="trash"/>
      </button>
    </li>
    
  )
}

export function User(item,index){
  const {username,age}= item
  return (
    <li className="item" key={index}>
      <span>{username}</span>
      <span>{age}</span>
    </li>
    
  )
}

/*

<button 
        id={id}
        className="btn-remove"
        onClick={()=>handleDelete(id)}
      >
        <FontAwesomeIcon className="control-icon" icon="trash"/>
      </button>

*/