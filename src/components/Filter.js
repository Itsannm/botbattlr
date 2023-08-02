import React, { Component } from 'react';

class Filter extends Component {
    handleChange = (event) => {
        this.props.filterChange(event.target.value)
    }

    render() {
        return (
                <select onChange={event =>this.handleChange(event)}>
                    <option value="All" >All</option>
                    <option value="Assault" >Assault</option>
                    <option value="Defender">Defender</option>
                    <option value="Support">Support</option>
                </select>
        );
    }
}

export default Filter;