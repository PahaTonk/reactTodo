import React from 'react';
import ReactDOM from 'react-dom';

import './css/libs/bootstrap.min.css';
import './css/index.css';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', id: 'dc' },
        { label: 'Make Awesome App', important: true, id: 'maa' },
        { label: 'Have a lunch', id: 'hl' }
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo = {1} done = {3}/>
            <div className="todo-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos = { todoData }/>
        </div>
    );
};

ReactDOM.render(<App />,
    document.querySelector('#root'));
