import React,{Component} from "react";

import ToDoList from "../todo-list";
import SearchPanel from "../search-panel";
import AppHeader from "../app-header";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

export default class App extends Component{

    constructor(){
        super();
        
        this.state = {
            todoData: [
                {label: "вчити promise learn.javascript", important: false, id: 1},
                {label: "матем кр", important: false, id: 2},
                {label: "learn React.js", important: true, id: 3},
            ],
        }

        this.deleteComponent = (id) => {
            this.setState((state) => {
                const newComponentsArr = state.todoData.filter(e => e.id !== id);

                return {
                    todoData: newComponentsArr,
                }
            })
        }
    }
    
    render(){
        return (
            <div className="todo-app">
                <AppHeader/>

                <div className="search-block">    
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                
                <ToDoList todoData={this.state.todoData} onDeleted={this.deleteComponent}/>
            </div>
        )
    }
} 
    

