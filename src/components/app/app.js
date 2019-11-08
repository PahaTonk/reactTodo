
import React from 'react';

import './app.css';

import AppHeader from './../app-header';
import TodoList from './../todo-list';
import SearchPanel from './../search-panel';
import ItemStatusFilter from './../item-status-filter';

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', id: 'dc' },
        { label: 'Make Awesome App', id: 'maa' },
        { label: 'Have a lunch', id: 'hl' }
    ];

    return (
        <div className='todo-app'>
            <AppHeader toDo = {1} done = {3}/>
            <div className='todo-panel d-flex'>
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos = { todoData }/>
        </div>
    );
};

export default App;