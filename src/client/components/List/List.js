import React from 'react';
import {GeneralApiServices} from '../../services/api-service'

import {Item} from '../Utils/Utils'

import './List.css';


export default class List extends React.Component {
  static defaultProps = {
    updateCounter: ()=>{}
  }
  

  state = {
    title:'List',
    inputText: '',
    list: [],
    counter:0,
  };

  componentDidMount() {
    GeneralApiServices.getAllItems().then((data) => {
      //this.props.updateCounter(data.length)
      //console.log(data)
      this.setState({
        list: data,
        counter:data.length,
      })
    })
    //this.props.updateCounter(this.state.counter)
  }

  handleAdd=(item)=>{
    
    GeneralApiServices.postItem(item).then(data=>{
      this.setState({
        list:[data, ...this.state.list],
        counter: this.state.counter+1,
      })
    })
    //this.props.updateCounter();
    
  }

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

  
  handleInputOnChange = (event) => {
    this.setState({ inputText: event.target.value });
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

  renderItemList=()=>{
    const { list}= this.state
    return (
      <ul className="list__content">
        {list.map((item,index)=>Item(item,index,this.handleDelete))}
      </ul>  
    )
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}
 
  render() {
    const list= this.renderItemList()
    return (
      <section className="list">
        
        <header className="list__header">
          <h1>Counter: {this.state.counter}</h1>
          <h4 className="heading">Item List</h4>
        </header>
        <input
          type="text"
          className="list__input"
          placeholder="What are you going to do?"
          onChange={this.handleInputOnChange}
          onKeyUp={this.handleInputKeyUp}
          value={this.state.inputText}
        />
        {list}
      </section>
    );
  }
}

// export default conncent(withTodos(withAuth(withUser(list))));



