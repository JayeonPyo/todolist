import React, { Component } from 'react';
import './TodoItem.scss';



class TodoItem extends Component {
  
  render() {
    return (
     <div>


<div id="divbox">
     <span className="todo">{this.props.value}</span>
     <div>
     <button id="modify">Modify</button>
     <button id="delete">Delete</button>
</div>
</div>
     </div>
    
    );
  }
}
export default TodoItem;
