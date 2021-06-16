import React from 'react';
import {Item} from '../Utils/Utils'

import './List.css';

export default class List extends React.Component {
  static defaultProps = {
    title:'',
    columns:[],
    list:[],
    hobbies:[],
    updateCounter: ()=>{},
    updateList:()=>{},
  }
  
  state = {
    
  };

  handleChange=(e)=>this.props.updateList(e.target.value)

  renderColumns= (columns)=>{
    return (
      <div className="list__columns">
        {columns.map((item,index)=><span key={index}>{item}</span>)}
      </div>
    )
  }

  renderItemList=()=>{
    const { list}= this.props
    return (
      <ul className="list__content">
        {list.map((item,index)=>Item(item,index))}
      </ul>  
    )
  }

  renderHobbiesList=(hobbies)=>{
    return (
      <div className='list__form'>
        <label htmlFor="hobbies" >Choose a hobby: </label>
        <select name='hobbies'id='hobbies' 
          onChange={(e)=>this.handleChange(e)}>
          {hobbies.map((item,index)=><option value={item} key={index}>{item}</option>)}
        </select>
      </div>
    )
  }

  render() {
    const {header,columns,hobbies}= this.props
    const list= this.renderItemList()
    return (
      <section className="list">
        <header className="list__header">
          <h1>{header}</h1>
        </header>
        {hobbies.length>0 && this.renderHobbiesList(hobbies)}
        {columns && this.renderColumns(columns)}
        {list}
      </section>
    );
  }
}





