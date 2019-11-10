import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
    onChange = ({ target : { value } }) => {
        this.props.onSearchItems(value);
    }

    render () {
        return (
            <input
                type='text'
                className='form-control search-input'
                onChange = { this.onChange }
                placeholder='type to search' />
        );
    };
};