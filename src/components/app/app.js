
import React, { Component } from 'react';

import './app.css';

import AppHeader from './../app-header';
import TodoList from './../todo-list';
import SearchPanel from './../search-panel';
import ItemStatusFilter from './../item-status-filter';
import ItemAddForm from './../item-add-form/index';

export default class App extends Component {
    itemIdLast = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ]
    };

    createItemId (text) {
        const itemIdFirst = text.split(' ').map( (item) => item[0]).join('');

        return `${itemIdFirst}-${++this.itemIdLast}`;
    };

    createTodoItem (label) {
        return {
            label,
            id: this.createItemId(label),
            important: false,
            done: false,
            show: true
        }
    };

    onDeletedListItem = (id) => {
        this.setState( ({ todoData }) => ({
            todoData: todoData.filter( (item) => item.id !== id )
        }) );
    };

    onAddListItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState( ({ todoData }) => ({
            todoData: todoData.concat(newItem)
        }) );
    };

    onTogglePropertyImportantOrDone = (id, stateName) => {
        this.setState( ({ todoData }) => {
            const index = todoData.findIndex(item => item.id === id);
            const oldItem = todoData[index];
            const newItem = {
                ...oldItem,
                [stateName]: !oldItem[stateName]
            };
            const newTodoData = [
                ...todoData.slice(0, index),
                newItem,
                ...todoData.slice(index + 1)
            ];

            return {
                todoData: newTodoData
            };
        } );
    };

    onSearchItems = (text) => {
        this.setState( ({ todoData }) => {
            const regExp = new RegExp(text, 'gi')
            const newTodoData = [ ...todoData ].map( (item) => {
                item.show = item.label.search(regExp) === -1 ? false : true;

                return item;
            });

            return {
                todoData: newTodoData
            }
        } )

    };

    render () {
        const { todoData } = this.state;
        const showItems = todoData.filter( (item) => item.show ).length;
        const doneItems = todoData.filter( (item) => item.done && item.show ).length;
        const otherItems = showItems - doneItems;

        return (
            <div className='todo-app'>
                <AppHeader toDo = { otherItems } done = { doneItems }/>
                <div className='todo-panel d-flex'>
                    <SearchPanel onSearchItems = { this.onSearchItems }/>
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos = { todoData }
                    onDeletedListItem = { this.onDeletedListItem }
                    onTogglePropertyImportantOrDone = { this.onTogglePropertyImportantOrDone }
                />
                <ItemAddForm
                    onAddListItem = { this.onAddListItem }
                />
            </div>
        );
    };
};
