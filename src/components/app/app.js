import React from "react";

import ToDoList from "../todo-list";
import SearchPanel from "../search-panel";
import AppHeader from "../app-header";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

const App = () => {
    const todoData = [
        {label: "learn React.js", important: false, id: 1},
        {label: "learn React.js", important: false, id: 2},
        {label: "just learn React.js", important: true, id: 3},
    ] 

    return (
        <div className="todo-app">
            <AppHeader/>
            <div className="search-block">    
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            
            <ToDoList todoData={todoData}/>
        </div>
    )
}

export default App;