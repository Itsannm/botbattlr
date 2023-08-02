import React, { Component } from 'react';

class BotSearch extends Component {
    constructor(){
        super()
        this.state = {
            query: ''
        }
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
        this.props.handleChange(event.target.value)
    }

    handleSearch = (event) => {
        event.preventDefault()
        this.props.handleClear(this.state.query)
        this.setState({
            query: ''
        })
    }

    render() {
        return (
            <div >
                <form>
                <input cname="query" type="text" class="form-control" placeholder="Search" value={this.state.query} aria-label="Search" aria-describedby="button-addon2" onChange={event => this.handleChange(event)}/>
                <button onClick={event => this.handleSearch(event)} class="btn btn-outline-secondary" type="button" id="button-addon2">Clear</button>

                </form>
                <div class="input-group mb-3">
  

            </div>
            </div>
        );
    }
}

export default BotSearch;