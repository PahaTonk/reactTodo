
import React, { Component } from 'react';

import './app.css';

import AppHeader from './../app-header';
import TodoList from './../todo-list';
import SearchPanel from './../search-panel';
import ItemStatusFilter from './../item-status-filter';

export default class App extends Component {
    state = {
        todoData: [
            { label: 'Drink Coffee', id: 'dc' },
            { label: 'Make Awesome App', id: 'maa' },
            { label: 'Have a lunch', id: 'hl' }
        ]
    };

    onDeletedListItem = (id) => {
        this.setState( ({ todoData }) => ({
            todoData: todoData.filter( (item) => item.id !== id )
        }) );
    };

    render () {
        const { todoData } = this.state;

        return (
            <div className='todo-app'>
                <AppHeader toDo = {1} done = {3}/>
                <div className='todo-panel d-flex'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos = { todoData }
                    onDeletedListItem = { this.onDeletedListItem }
                />
            </div>
        );
    };
};
