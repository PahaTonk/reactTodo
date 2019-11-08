import React, { Component } from 'react';

import './../todo-list.css';

import './../../../libs/fotnawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TodoListItem extends Component {
    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState( ({ done }) => ({
            done: !done
        }) );
    };

    onMarkImportant = () => {
        this.setState( ({ important }) => ({
            important: !important
        }) );
    }

    checkClassNames (firstClassNames  = '') {
        let classNames = firstClassNames;

        if (this.state.done) {
            classNames += ' done';
        }

        if (this.state.important) {
            classNames += ' important';
        }

        return classNames;
    }

    render () {
        const { label } = this.props;
        const { important } = this.state;
        let classNames = this.checkClassNames('todo-list-item');

        const itemStyles = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className = { classNames }>
                <span
                    className = 'todo-list-item-label'
                    style = { itemStyles }
                    onClick = { this.onLabelClick }>
                    {label}
                </span>

                <button type='button'
                    className='btn btn-outline-success btn-sm float-right'
                    onClick = { this.onMarkImportant }
                >
                    <FontAwesomeIcon icon='exclamation'/>
                </button>

                <button type='button'
                    className='btn btn-outline-danger btn-sm float-right'
                >
                    <FontAwesomeIcon icon='trash' />
                </button>
            </span>
          );
    };
}
