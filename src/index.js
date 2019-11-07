import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
    return (
        <h1>Hello World!</h1>
    );
};

const TodoList = (params) => {
    const items = ['Learn React', 'Build Awesome App'];

    return (
        <ul>
            <li>{ items[0] }</li>
            <li>{ items[1] }</li>
        </ul>
    );
};

const SearchPanel = () => {

    const searchText = 'Type here to search';
    const searchStyle ={
        fontSize: '25px'
    }

    return (
        <input
            style={ searchStyle }
            placeholder={ searchText }
            />
    );
};

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
