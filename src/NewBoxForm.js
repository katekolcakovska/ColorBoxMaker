import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { height: "", width: "", color: "" };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newBox = { ...this.state, id: uuidv4() };
        //Ova so IDto vo shopping list go napravi vo addItem vo nas slucaj addBox
        this.props.addBox(newBox);
        this.setState({ height: "", width: "", color: "" });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='height'>Height: </label>
                    <input id='height' type='text' name='height' value={this.state.height} onChange={this.handleChange}></input>
                </div>
                <div>
                    <label htmlFor='width'>Width: </label>
                    <input id='width' type='text' name='width' value={this.state.width} onChange={this.handleChange}></input>
                </div>
                <div>
                    <label htmlFor='color'>Background Color: </label>
                    <input id='color' type='text' name='color' value={this.state.color} onChange={this.handleChange}></input>
                </div>
                <button>Add New Box</button>
            </form>
        )
    }
}

export default NewBoxForm;