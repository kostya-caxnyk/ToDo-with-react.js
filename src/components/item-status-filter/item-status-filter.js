import React, {Component} from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component{

    constructor(props){
        super(props);

        this.buttons = [
            {name: "all", label: "all", className: "btn btn-info"},
            {name: "active", label: "active", className: "btn btn-outline-secondary"},
            {name: "done", label: "done", className: "btn btn-outline-secondary"},
        ]

        this.onBtnClick = (e) => {
            props.onFilterBtn(e.target.name);

            this.buttons = this.buttons.map(elem => {
                if(elem.name === e.target.name) {
                    return {...elem, className: "btn btn-info"}
                }
                return {...elem, className: "btn btn-outline-secondary"}
            })
        }
    }


    render(){
        const buttons = this.buttons.map(({name, label, className}) => {
            return (
                <button name={name} className={className} type="button" key={name}>{label}</button>
            )
        })

        return (
            <div className="btn-group" onClick={this.onBtnClick}>
                {buttons}
            </div> 
        )
    }
}
