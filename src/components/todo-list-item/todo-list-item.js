import React from 'react';
import "./todo-list-item.css";

export default class ToDoListItem extends React.Component {

    render(){
        const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;
        let classNames = "todo-list-item";

        if(done){
            classNames += " done";
        }

        if(important){
            classNames += " important";
        }
        
        return (
            <span className="list-item">
                <span className={classNames} onClick={onToggleDone}>{label}</span>
    
                <button className="btn btn-outline-danger btn-sm" type="button" onClick={onDeleted}><i className="fa fa-trash-o" /></button>
    
                <button className="btn btn-outline-success btn-sm" type="button" onClick={onToggleImportant}><i className="fa fa-exclamation" /></button>
            </span>
        )
    }
}
 