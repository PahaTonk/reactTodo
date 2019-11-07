import React from 'react';
import ReactDOM from 'react-dom';

import './libs/fotnawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AppHeader from './components/app-header';
import TodoList from './components/todo-list/todo-list';
import SearchPanel from './components/search-panel';

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', id: 'dc' },
        { label: 'Make Awesome App', important: true, id: 'maa' },
        { label: 'Habe a lunch', id: 'hl' }
    ];

    return (
        <div>
            <FontAwesomeIcon icon="coffee" />
            <AppHeader />
            <SearchPanel />
            <TodoList todos = { todoData }/>
        </div>
    );
};

ReactDOM.render(<App />,
    document.querySelector('#root'));
