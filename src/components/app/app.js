import React,{Component} from "react";

import ToDoList from "../todo-list";
import SearchPanel from "../search-panel";
import AppHeader from "../app-header";
import ItemStatusFilter from "../item-status-filter";
import AddItemButton from '../add-item-button';

import "./app.css";

export default class App extends Component{

    idGenerator = 100;

    constructor(){
        super();
        
        this.state = {
            todoData: [
                this.createToDoItem("learn promises"),
                this.createToDoItem("learn react"),
                this.createToDoItem("learn React.js"),
            ],
        }

        this.deleteComponent = (id) => {
            this.setState(state => {
                const newComponentsArr = state.todoData.filter(e => e.id !== id);

                return {
                    todoData: newComponentsArr,
                }
            })
        }

        this.addItem = (text) => {
            this.setState(state => {
                const expandedArr = state.todoData.concat(this.createToDoItem(text));

                return {
                    todoData: expandedArr,
                }
            })
        }

        this.onToggleImportant = (id) => {
            this.setState(state => {
                return {
                    todoData: this.changeProperty(state.todoData, id, "important"),
                }
            })
        }

        this.onToggleDone = (id) => {
            this.setState(state => {
                return {
                    todoData: this.changeProperty(state.todoData, id, "done"),
                }
            })
        }

        this.onSearchLabelChange = (searchText) => {
            this.setState(state => {
                const filteredArr = state.todoData.map(e => {
                    if(searchText === "") return {...e, display: true};

                    if(!e.label.startsWith(searchText)) {
                        return {...e, display: false}
                    }

                    return {...e, display: true};
                })

                return {
                    todoData: filteredArr,
                }
            })
        }

        this.onFilterBtn = (id) => {
            if(id === "all") {
                this.setState(state => {
                    return {
                        todoData: state.todoData.map(e => ({...e, display: true})),
                    }
                })
            } else if(id === "active") {
                this.setState(state => {
                    return {
                        todoData: this.filterByDoneProp(state.todoData, false),
                    }
                })
            } else if(id === "done") {
                this.setState(state => {
                    return {
                        todoData: this.filterByDoneProp(state.todoData, true)
                    }
                })
            }
        }

    }
    
    filterByDoneProp(arr, isDone) {
        return  arr.map(e => {
            if(e.done === isDone) {
                return {...e, display: true}
            }
            return {...e, display: false};
        })
    }

    changeProperty(arr, id, property){
        return arr.map(e => {
            if(e.id === id){
                return {...e, [property]: !e[property]};
            }
            return e;
        })
    }

    createToDoItem(text){
        return {
            label: text,
            important: false,
            done: false,
            id: this.idGenerator++,
            display: true,
        }
    }


    render(){
        const todoData = this.state.todoData;
        const doneCount = todoData.filter(e => e.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader done={doneCount} todo={todoCount}/>

                <div className="search-block">    
                    <SearchPanel onSearchLabelChange={this.onSearchLabelChange}/>
                    <ItemStatusFilter onFilterBtn={this.onFilterBtn}/>
                </div>
                
                <ToDoList todoData={this.state.todoData} onDeleted={this.deleteComponent} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone}/>

                <AddItemButton onAddItem={this.addItem}/>
            </div>
        )
    }
} 
    

