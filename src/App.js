import React, {Component} from 'react';
import Task from "./components/Task/Task";
import './App.css'
import Input from "./components/Input/Input";


class App extends Component {

    state = {
        tasks: [
            {id: 0, title: 'Make a simple todo application', status: false},
            {id: 1, title: 'Make a new video', status: true},
            {id: 2, title: 'Make a new SPA', status: false}
        ]
    }

    onTaskStatusDone = (id) => {
        let {tasks} = this.state;
        let findTaskId = tasks.find(task => task.id === id);
        this.setState(state => {
            findTaskId.status = true;
            return tasks
        })
    }

    onDeleteTask = (id) => {
        let {tasks} = this.state;
        let findTaskId = tasks.find(task => task.id === id);
        this.setState(state => {
            delete findTaskId.id
            delete findTaskId.title
            delete findTaskId.status
            return tasks;
        })
    }

    addTask = (value) => {
        let {tasks} = this.state;
        let task = {id: tasks.length !== 0 ? tasks.length : 0, title: value, status: false}
        this.setState(state => {
            tasks.push(task)
            return tasks
        })
    }

    render() {
        let {tasks} = this.state;
        let activeTasks = tasks.filter(task => task.status === false);
        let doneTasks = tasks.filter(task => task.status === true);
        return (
            <div className={"app"}>
                <h2 className={"app-title"}>Active tasks: {activeTasks.length}</h2>
                {
                    [...activeTasks, ...doneTasks].map(task => {
                        return(
                            <Task task={task} key={task.id} onTaskStatusDone={this.onTaskStatusDone} onDeleteTask={this.onDeleteTask}/>
                        )
                    })
                }
                <Input addTask={this.addTask}/>
            </div>
        );
    }
}

export default App;