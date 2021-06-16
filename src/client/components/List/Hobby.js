import React from 'react';
import {AgeDemographic} from '../Utils/Utils'

import './List.css';


export default class Hobby extends React.Component {
  static defaultProps = {
    list:[],
    hobbies:[],
    updateList: ()=>{}
  }
  
  state = {
    
  };

  handleChange=(e)=>this.props.updateList(e.target.value)

  renderItemList=()=>{
    const { list}= this.props
    return (
      <ul className="list__content">
        {list.map((item,index)=>AgeDemographic(item,index))}
      </ul>  
    )
  }

  renderHobbiesList=()=>{
    const {hobbies}= this.props
    return (
      <>
        <label htmlFor="hobbies" >Choose a hobby: </label>
        <select name='hobbies'id='hobbies' 
          onChange={(e)=>this.handleChange(e)}>
          {hobbies.map((item,index)=><option value={item} key={index}>{item}</option>)}
        </select>
      </>
    )
  }

  
  
 
  render() {
    const list= this.renderItemList()
    const hobbiesList= this.renderHobbiesList()
    return (
      <section className="list">
        <header className="list__header">
            <h1>Age Demographic of Users with hobby</h1>
        </header>
        <div className="list__form">
            {hobbiesList}
        </div>
        <div className="list__columns">
          <span>Age</span>
          <span>Count</span>
        </div>
        {list}
      </section>
    );
  }
}

// export default conncent(withTodos(withAuth(withUser(list))));



