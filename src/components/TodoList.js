import React from 'react';
import TodoListItem from './TodoListItem';
const TodoList = (props) => {
    const items = ['Learn HTMl','Learn CSS','Learn react']
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



