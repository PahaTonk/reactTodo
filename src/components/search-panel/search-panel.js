import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
    state = {
        term: ''
    };

    onChange = ({ target : { value } }) => {
        this.setState({
            term: value
        });

        this.props.onSearchItems(value);
    };

    render () {
        const { term } = this.state;

        return (
            <input
                type='text'
                className='form-control search-input'
                onChange = { this.onChange }
                placeholder='type to search'
                value = { term }
                />
        );
    };
};