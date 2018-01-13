import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." value={this.props.filterText} />
                <p>
                    <input type="checkbox" checked={this.props.isStockOnly} />{' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}