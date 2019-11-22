import React, { Component } from 'react'
import { connect } from 'react-redux';
import TaskItem from '../../components/TaskItem/index';

export class DayCard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { tasks } = this.props
        let taskList = null;
        if (tasks) {
            taskList = tasks.map((el, i) => (<TaskItem text={el.text} key={i} />))
        }
        return (
            <div>
                <h3>{this.props.day}</h3>
                {taskList}
            </div>
        )
    }
}
export default connect()(DayCard);