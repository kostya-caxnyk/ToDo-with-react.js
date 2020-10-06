import React from 'react';
import "./todo-list-item.css";

const ToDoListItem = ({label, important = false}) =>{
    const style = {
        color: important ? "steelblue" : "black",
        fontWeight: important ? "bold" : "normal",
    }

    return (
        <span className="list-item">
            <span style={style} className="todo-list-item important">{label}</span>

            <button className="btn btn-outline-danger btn-sm" type="button"><i className="fa fa-trash-o" /></button>

            <button className="btn btn-outline-success btn-sm" type="button"><i className="fa fa-exclamation" /></button>
        </span>
        
    )
}

export default ToDoListItem;