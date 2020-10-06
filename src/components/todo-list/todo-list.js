import React from "react";
import ToDoListItem from '../todo-list-item';
import "./todo-list.css"

const ToDoList = ({todoData}) => {
    let listElements = todoData.map(item => {

        const {id, ...itemProps} = item;

        return (
            <li key={id} className="list-group-item">
                <ToDoListItem {...itemProps}/>
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