import React, { Component } from 'react';

import './../todo-list.css';

import './../../../libs/fotnawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TodoListItem extends Component {
    state = {
        done: false,
        important: false
    };

    checkClassNames (firstClassNames  = '', important = false, done = false) {
        let classNames = firstClassNames;

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return classNames;
    }

    render () {
        const { label, onDeletedListItem, onTogglePropertyImportantOrDone,
                important, done } = this.props;
        const itemStyles = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };
        const classNames = this.checkClassNames('todo-list-item', important, done);

        return (
            <span className = { classNames }>
                <span
                    className = 'todo-list-item-label'
                    style = { itemStyles }
                    onClick = { () => {
                        onTogglePropertyImportantOrDone('done');
                    } }
                >
                    {label}
                </span>

                <button type='button'
                    className='btn btn-outline-success btn-sm float-right'
                    onClick = { () => {
                        onTogglePropertyImportantOrDone('important');
                    } }
                >
                    <FontAwesomeIcon icon='exclamation'/>
                </button>

                <button type='button'
                    className='btn btn-outline-danger btn-sm float-right'
                    onClick = { onDeletedListItem }
                >
                    <FontAwesomeIcon icon='trash' />
                </button>
            </span>
          );
    };
}
