import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list/todo-list';
import SearchPanel from './components/search-panel';

const App = () => {
    const isLoggedIn = true;
    const loginBox = <span>Log in please</span>;
    const welcomBox = <span>Welcom!</span>;

    return (
        <div>
            { isLoggedIn ? welcomBox : loginBox }
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />,
    document.querySelector('#root'));
