import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    render () {
        const { onAddListItem } = this.props;
        const newItemLabel = 'Drink Coffee';

        return (
            <div className = 'item-add-form'>
                <button
                    onClick = { () => onAddListItem(newItemLabel) }
                    className = 'btn btn-outline-secondary'
                >
                    Add Item
                </button>
            </div>
        );
    };
};