import React, { Component } from 'react'
import './search-panel.css'

export default class SearchPanel extends Component {
    constructor(props) {
        super(props)

        this.onLabelChange = (e) => {
            this.props.onSearchLabelChange(e.target.value)
        }
    }
    

    render() {
        return (
            <input type="text" className="form-control" placeholder="type to search" onChange={this.onLabelChange}/>
        )
    }
}
