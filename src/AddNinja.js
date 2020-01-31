import React, { Component } from 'react';

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.ola(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="name" id="name" onChange={this.handleChange} /><br />
                    <label htmlFor="age">Age: </label>
                    <input type="age" id="age" onChange={this.handleChange} /> <br />
                    <label htmlFor="belte">Belt: </label>
                    <input type="belt" id="belt" onChange={this.handleChange} /> <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja