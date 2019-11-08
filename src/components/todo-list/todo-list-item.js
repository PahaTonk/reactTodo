import React from 'react';

import './todo-list.css';

import '../../libs/fotnawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoListItem = ({ label, important }) => {
    const itemStyles = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
      };

    return (
        <span className="todo-list-item">
        <span
            className="todo-list-item-label"
            style={itemStyles}>
            {label}
        </span>

        <button type="button"
            className="btn btn-outline-success btn-sm float-right">

            <FontAwesomeIcon icon="exclamation" />
        </button>

          <button type="button"
                  className="btn btn-outline-danger btn-sm float-right">
                <FontAwesomeIcon icon="trash" />
          </button>
        </span>
      );
};

export default TodoListItem;
