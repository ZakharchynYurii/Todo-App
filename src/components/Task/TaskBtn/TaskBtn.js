import React, {Component} from 'react';

class TaskBtn extends Component {
    render() {
        let {task, onTaskStatusDone, onDeleteTask} = this.props;
        let {id, status} = task;
        return (
            <div>
                {
                    !status ? <p className={"task-done-btn"} onClick={onTaskStatusDone.bind(this, id)}>✔</p> :
                        <p className={"task-done-btn"} onClick={onDeleteTask.bind(this, id)}>✖</p>
                }
            </div>
        );
    }
}

export default TaskBtn;