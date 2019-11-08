import React from 'react';

import TodoListItem from './todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeletedListItem }) => {

    const elements = todos.map( ({ id, ...item }) => (
        <li key = { id } className='list-group-item todo-list-item'>
            <TodoListItem { ...item }
                onDeletedListItem = { () => onDeletedListItem(id) }
            />
        </li>
    ) );

    return (
        <ul className='list-group todo-list'>
            { elements }
        </ul>
    );
};

export default TodoList;
