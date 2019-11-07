import React from 'react';

const TodoListItem = ({ label, important = false }) => {
    const itemStyles = {
        color: important ? 'tomato' : 'black'
    }

    return (
        <span
            style={ itemStyles }
            >{ label }</span>
    );
};

export default TodoListItem;
