import React from 'react';
import {GeneralApiServices, UserApiServices} from '../../services/api-service'

import {AgeDemographic} from '../Utils/Utils'

import './Hobby.css';


export default class Hobby extends React.Component {
  static defaultProps = {
    
  }
  
  state = {
    hobbies:[],
    list: [],
    selectedHobby:''
  };

  componentDidMount() {
    GeneralApiServices.getAllItems('hobbies').then((data) => {
      this.setState({
        hobbies: data,
        selectedHobby: data[0]
      })
    }).then(()=>{
      this.updateList(this.state.selectedHobby)
    })
  }
  updateList= (hobby)=>{
    //const {selectedHobby}= this.state
    UserApiServices.getAgeDemographicByHobby(hobby).then((data)=>{
      console.log(data)
      this.setState({
        list: data
      })
    })
  }
  renderItemList=()=>{
    const { list}= this.state
    return (
      <ul className="list__content">
        {list.map((item,index)=>AgeDemographic(item,index))}
      </ul>  
    )
  }

  renderHobbiesList=()=>{
    const {hobbies}= this.state
    return (
      <>
        <label htmlFor="hobbies" >Choose a hobby: </label>
        <select name='hobbies'id='hobbies' 
          onChange={(e)=>this.handleInputOnChange(e)}>
          {hobbies.map((item,index)=><option value={item} key={index}>{item}</option>)}
        </select>
      </>
    )
  }

  handleInputOnChange = (event) => {
    const {value}= event.target
    this.setState({selectedHobby: value });
    this.updateList(value)
  };
  handleInputKeyUp = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const id= Math.floor(Math.random() * 10000);
      const title = this.state.inputText;
      const completed = false;
      //const newItem = new Todo(id, title, completed,1);
      const newItem={id,title,completed}      
      this.handleAdd(newItem);
      this.setState({
        inputText: '',
      });
    }
  };
 
  render() {
    console.log(this.state.list)
    const list= this.renderItemList()
    const hobbiesList= this.renderHobbiesList()
    return (
      <section className="list">  
        <h1>Age Demographic of Users with hobby</h1>
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



