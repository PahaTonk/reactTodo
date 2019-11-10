import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        label: ''
    };

    onLabelChange = (event) => {
        const targetValue = event.target.value;

        this.setState({
            label: targetValue
        });
    };

    onSubmit = (event) => {
        event.preventDefault();

        const formInputSearch = event.currentTarget.querySelector('.todo-input-search');

        if (!formInputSearch.value) return;

        this.setState({
            label: ''
        });
        this.props.onAddListItem(this.state.label);
    };

    render () {
        const { label } = this.state;

        return (
            <form
                className = 'item-add-form d-flex'
                onSubmit = { this.onSubmit }
            >
                <input
                    type = 'text'
                    className = 'form-control todo-input-search'
                    onChange = { this.onLabelChange }
                    placeholder = 'What needs to be done'
                    value = { label }
                />
                <button
                    className = 'btn btn-outline-secondary'
                >
                    Add Item
                </button>
            </form>
        );
    };
};