import React from 'react';
import "./todo-list-item.css";

export default class ToDoListItem extends React.Component {

    constructor(){
        super();
        this.state = {
            done: false,
            important: false,
            deleted: false,
        }

        this.onLabelClick = () => {
            this.setState((state) => {
                return {
                    done: !state.done,
                }
            })
        }

        this.onImportantButton = () => {
            this.setState((state) => {
                return {
                    important: !state.important,
                }
            })
        }
    }

    render(){
        const {label, onDeleted} = this.props;
        const {done, important} = this.state;
        let classNames = "todo-list-item";

        if(done){
            classNames += " done";
        }

        if(important){
            classNames += " important";
        }
    
        return (
            <span className="list-item">
                <span className={classNames} onClick={this.onLabelClick}>{label}</span>
    
                <button className="btn btn-outline-danger btn-sm" type="button" onClick={onDeleted}><i className="fa fa-trash-o" /></button>
    
                <button className="btn btn-outline-success btn-sm" type="button" onClick={this.onImportantButton}><i className="fa fa-exclamation" /></button>
            </span>
        )
    }
}
 