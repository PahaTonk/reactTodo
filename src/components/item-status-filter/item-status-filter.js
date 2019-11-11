import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    state = {
        buttons: [
            { label: 'All', classNames: ['btn', 'btn-info'], id: 'btn-all' },
            { label: 'Active', classNames: ['btn', 'btn-outline-secondary'], id: 'btn-active' },
            { label: 'Done', classNames: ['btn', 'btn-outline-secondary'], id: 'btn-done' }
        ],
        activeClass: 'btn-all'
    };

    onClick = (e) => {
        const target = e.target.closest('.btn');
        const targetId = target.id;
        const targetLabel = target.textContent;

        if (targetId === this.state.activeClass) return;

        this.setState(({ buttons }) => ({
            buttons: [ ...buttons.map( (item) => {
                const indexOldButton = item.classNames.indexOf('btn-info');
                const indexNewButton = item.classNames.indexOf('btn-outline-secondary');

                if ( indexOldButton ) {
                    item.classNames[indexOldButton] = 'btn-outline-secondary';
                }

                if ( item.id.includes(targetId) ) {
                    item.classNames[indexNewButton] = 'btn-info';
                }

                return item;
            }) ],
            activeClass: targetId
        }) )

        this.props.onActiveElements(targetLabel);
    }


    render () {
        const buttons = [ ...this.state.buttons ].map( (item) => (
            <button
                type = 'button'
                id = { item.id }
                className = { item.classNames.join(' ') }
                key = { item.id }
            >
                { item.label }
            </button>
        ) );

        return (
            <div className='btn-group' onClick = { this.onClick }>
                { buttons }
            </div>
        );
    };
}
