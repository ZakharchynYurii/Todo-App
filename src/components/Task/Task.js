import React, {Component} from 'react';
import './Task.css';
import TaskBtn from "./TaskBtn/TaskBtn";

class Task extends Component {
    render() {
        let {task, onTaskStatusDone, onDeleteTask} = this.props;
        let {title} = task;
        return (
            <div className={"task"}>
                <p>{title}</p>

                <TaskBtn onTaskStatusDone={onTaskStatusDone} task={task} onDeleteTask={onDeleteTask}/>
            </div>
        );
    }
}

export default Task;