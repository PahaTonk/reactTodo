import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
    return (
        <h1>Hello World!</h1>
    );
}

const TodoList = (params) => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Duild Awesome App</li>
        </ul>
    );
}

const SearchPanel = () => {
    return (
        <input placeholder="Search" />
    );
}

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
}

ReactDOM.render(<App />,
    document.querySelector('#root'));
