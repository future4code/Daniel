import React from "react";
import { connect } from "react-redux";
import DayCard from '../DayCard/index';
import { fetchTasksAction, postTaskAction } from '../../actions/tasks';
import NewTaskForm from "../../components/NewTaskForm";


export class Planner extends React.Component {

  componentDidMount() {
    this.props.fetchTasks();
  }

  createNewTask = (formObject) => {
    const { day, text } = formObject;
    this.props.postTask(text,day);
  }
  render() {
    const { allTasks } = this.props
    let allDays = [
      { day: "Segunda", tasks: [] }, { day: "Terça", tasks: [] },
      { day: "Quarta", tasks: [] }, { day: "Quinta", tasks: [] },
      { day: "Sexta", tasks: [] }, { day: "Sábado", tasks: [] },
      { day: "Domingo", tasks: [] }
    ];
    allDays = allDays.map(element => ({ day: element.day, tasks: allTasks.filter(task => task.day === element.day) }))
    allDays = allDays.map((element, i) => (<DayCard key={i} day={element.day} tasks={element.tasks} />))

    return (
      <section>
        <NewTaskForm createTask={this.createNewTask} />
        {allDays}
      </section>
    );
  }
}
const mapStateToProps = state => ({
  allTasks: state.tasks.allTasks
});

const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(fetchTasksAction()),
  postTask: (text,day) => dispatch(postTaskAction(text,day))
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
