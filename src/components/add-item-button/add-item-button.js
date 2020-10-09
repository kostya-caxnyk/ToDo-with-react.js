import React, { Component } from 'react';
import './add-item-button.css';

export default class AddItemButton extends Component {

    constructor(){
        super();

        this.state = {
            label: "",
        }

        this.onLabelChange = (e) => {
            this.setState({
                label: e.target.value,
            })
        }

        this.onSubmit = (e) => {
            e.preventDefault();
            if(this.state.label === "") return;
            this.props.onAddItem(this.state.label);
            this.setState({
                label: '',
            })
        }
    }

    render() {
        return (
            <form className="add-item" onSubmit={this.onSubmit}>
                <input type="text" className="form-control" onChange={this.onLabelChange} placeholder="what needs to be done" value={this.state.label}></input>
                <button className="btn btn-outline-info">Add item</button>
            </form>
        )
    }
}
