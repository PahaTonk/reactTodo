
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
        searchText: this.props.searchText,
        todoData: [
            this.createTodoItem('Drink Coffee', this.props.searchText),
            this.createTodoItem('Make Awesome App', this.props.searchText),
            this.createTodoItem('Have a lunch', this.props.searchText)
        ],
        activeElements: 'All'
    };

    createItemId (text) {
        const itemIdFirst = text.split(' ').map( (item) => item[0]).join('');

        return `${itemIdFirst}-${++this.itemIdLast}`;
    };

    createTodoItem (label, searchText) {
        return {
            label,
            id: this.createItemId(label),
            important: false,
            done: false,
            show: this.filterTodoData(label, searchText)
        }
    };

    onDeletedListItem = (id) => {
        this.setState( ({ todoData }) => ({
            todoData: todoData.filter( (item) => item.id !== id )
        }) );
    };

    onAddListItem = (label) => {
        const newItem = this.createTodoItem(label, this.state.searchText);

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

    filterTodoData (label, searchText) {
        const regExp = new RegExp(searchText, 'gi');

        return !(label.search(regExp) === -1);
    }

    onSearchItems = (searchText) => {
        this.setState( ({ todoData }) => {
            const newTodoData = [ ...todoData ].map( (item) => {
                item.show = this.filterTodoData(item.label, searchText);

                return item;
            });

            return {
                todoData: newTodoData,
                searchText
            }
        } )

    };

    onActiveElements = (activeElements) => {
        this.setState({
            activeElements
        })
    }

    render () {
        const { todoData, activeElements } = this.state;
        const todoDataFilter = this.state.todoData.filter( (item) => {
            if (activeElements === 'Done') {
                return item.done;
            } else if (activeElements === 'Active') {
                return !item.done;
            }

            return true;
        });
        const showItems = todoData.filter( (item) => item.show ).length;
        const doneItems = todoData.filter( (item) => item.done && item.show ).length;
        const otherItems = showItems - doneItems;

        return (
            <div className='todo-app'>
                <AppHeader toDo = { otherItems } done = { doneItems }/>
                <div className='todo-panel d-flex'>
                    <SearchPanel onSearchItems = { this.onSearchItems }/>
                    <ItemStatusFilter
                        onActiveElements = { this.onActiveElements }
                    />
                </div>
                <TodoList
                    todos = { todoDataFilter }
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
