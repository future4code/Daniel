import React from "react";
import { connect } from "react-redux";
import DayCard from '../DayCard/index';
import { fetchTasksAction } from '../../actions/tasks';


export class Planner extends React.Component {
  componentDidMount() {
    this.props.fetchTasksAction();
  }

  render() {
    const { allTasks } = this.props
    let allDays = [
      { day: "Segunda", tasks: [] }, { day: "Terça", tasks: [] },
      { day: "Quarta", tasks: [] }, { day: "Quinta", tasks: [] },
      { day: "Sexta", tasks: [] }, { day: "Sábado", tasks: [] },
      { day: "Domingo", tasks: [] }
    ];
    if (allTasks) {
      allDays = allDays.map(element => ({ day: element.day, tasks: allTasks.filter(task => task.day === element.day) }))
      allDays = allDays.map((element, i) => (<DayCard key={i} day={element.day} tasks={element.tasks} />))
    }
    else { allDays = allDays.map((el, i) => (<DayCard key={i} day={el.day} />)) }


    return <section>{allDays}</section>;
  }
}
const mapStateToProps = state => ({
  allTasks: state.tasks.alltasks
});

const mapDispatchToProps = dispatch => ({
  fetchTasksAction: () => dispatch(fetchTasksAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
