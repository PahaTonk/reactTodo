import React from 'react';
import ReactDOM from 'react-dom';

const el = (
    <div>
        <h1>Hello World!</h1>
        <input placeholder="Search" />
        <ul>
            <li>Learn React</li>
            <li>Duild Awesome App</li>
        </ul>
    </div>
);

ReactDOM.render(el, document.querySelector('#root'));