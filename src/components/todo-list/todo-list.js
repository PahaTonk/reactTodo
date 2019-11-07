import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {

    const elements = todos.map( ({ id, ...item }) => (
        <li key = { id }>
            <TodoListItem { ...item }/>
        </li>
    ) );

    return (
        <ul className="list-group">
            { elements }
        </ul>
    );
};

export default TodoList;
