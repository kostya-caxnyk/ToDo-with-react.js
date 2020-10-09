import React from "react";
import ToDoListItem from '../todo-list-item';
import "./todo-list.css"

const ToDoList = ({todoData, onDeleted, onToggleImportant, onToggleDone}) => {
    
    let listElements = todoData.map(item => {
        let classNames = "list-group-item";
        const {id, display, ...itemProps} = item;

        if(!display) {
            classNames += " invisible";
        }

        return (
            <li key={id} className={classNames}>
                <ToDoListItem {...itemProps} onDeleted={() => onDeleted(id)} onToggleImportant={() => onToggleImportant(id)} onToggleDone={() => onToggleDone(id)}/>
            </li>
        )
    })

    return (
        <ul className="list-group todo-list">
            {listElements}
        </ul>
    )
} 

export default ToDoList;