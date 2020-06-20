import React from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.css';
const TodoList = (props) => {
  const elements = props.todos.map((item) => {

    const {id,...otherProps } = item;

      return (
        <li key = {id} className = "list-group-item">
        <TodoListItem {...otherProps }/>
        </li>
      );
  });
    
    return (
        <ul className = "list-group">
            {elements}
        </ul>
    );
}

export default TodoList;



