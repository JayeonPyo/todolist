import React, { Component } from 'react';
import styled from "styled-components";
import TodoItem from './TodoItem';

import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      items: [],
      value:""
    };
  }

    onClickAdd = e => {
    const items = this.state.items;
     items.push(this.state.value);
     this.setState({
         items
       });
    };

    onChange = e => {
      this.setState({ value: e.target.value});
    }
  
  render() {
    return (
   <>
   
   <div className="name">To Do List</div>
   <div className="divbox">
    <input type="text" id="input" onChange={this.onChange}
     placeholder="Enter your work to do"></input>
    <button onClick = {this.onClickAdd} id="button"
   >Add</button>
   </div>
    {this.state.items.map((value, idx) => (
      <TodoItem key={idx} value={value}></TodoItem>
    ))}
   
   </>
  
    );
      
  }

}


export default App;