import React from "react";
import { connect } from "react-redux";
import DayCard from '../DayCard/index';
import { fetchTasksAction } from '../../actions/expenses';


export class Planner extends React.Component {
  
  render() {
    return <section><DayCard/></section>;
  }
}
const mapStateToProps = state => ({
  allTasks: state.tasks.alltasks
});

const mapDispatchToProps = dispatch => ({
  fetchTasksAction: () => dispatch(fetchTasksAction())
});

export default connect(mapStateToProps,mapDispatchToProps)(Planner);
