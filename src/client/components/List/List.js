import React from 'react';
import {GeneralApiServices} from '../../services/api-service'

import {User} from '../Utils/Utils'

import './List.css';


export default class List extends React.Component {
  static defaultProps = {
    updateCounter: ()=>{}
  }
  

  state = {
    title:'All Users',
    inputText: '',
    list: [],
    counter:0,
  };

  componentDidMount() {
    GeneralApiServices.getAllItems('users').then((data) => {
      this.setState({
        list: data,
        counter:data.length,
      })
    })
    //this.props.updateCounter(this.state.counter)
  }

  // handleAdd=(item)=>{
    
  //   GeneralApiServices.postItem(item).then(data=>{
  //     this.setState({
  //       list:[data, ...this.state.list],
  //       counter: this.state.counter+1,
  //     })
  //   })
  //   //this.props.updateCounter();
    
  // }

  handleDelete=(id)=>{
    GeneralApiServices.deleteItemById(id)
    .then(()=>{
      this.setState({
        list: this.state.list.filter(item=> item.id !==id),
        counter: this.state.counter-1,
      })
     
    })
    .catch(err=>console.warn(err))
  }

  refresh=(id)=>{
    this.props.updateCounter(id)
  }


  renderItemList=()=>{
    const { list}= this.state
    return (
      <ul className="list__content">
        {list.map((item,index)=>User(item,index))}
      </ul>  
    )
  }
 
  render() {
    const list= this.renderItemList()
    return (
      <section className="list">
        
        <header className="list__header">
          <h1>All Users: {this.state.counter}</h1>
        </header>
        <div className="list__columns">
          <span>User Name</span>
          <span>User Age</span>
        </div>
        {list}
      </section>
    );
  }
}





