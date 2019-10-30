import React from "react";
import TaskCard from "./TaskCard";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  FILTER_ALL_TASKS,
  FILTER_DONE_TASKS,
  FILTER_TODO_TASKS
} from "../constants/index";
import { fetchPosts } from "../actions/Actions.js";

const StyledGrid = styled(Grid)`
  padding: 0 32px 0 12px;
`;

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    this.props.fetchAllTasks();
  }
  render() {
    const filter = this.props.activeFilter;
    let newAllTasks = this.props.allTasks;
    switch (filter) {
      case FILTER_DONE_TASKS:
        newAllTasks = newAllTasks.filter(ele => {
          if (ele.done) {
            return true;
          }
          return false;
        });
        break;
      case FILTER_TODO_TASKS:
        newAllTasks = newAllTasks.filter(ele => {
          if (!ele.done) {
            return true;
          }
          return false;
        });
        break;
      case FILTER_ALL_TASKS:
        break;
      default:
        break;
    }
    const allTasks = newAllTasks.map((el, i) => {
      return (
        <Grid item container alignItems="center">
          <TaskCard task={el} key={i} />
        </Grid>
      );
    });

    return (
      <Grid item xs={12}>
        <StyledGrid item container alignItems="center" xs={12}>
          {allTasks}
        </StyledGrid>
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  return {
    activeFilter: state.tasks.filter,
    allTasks: state.tasks.tasks
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchAllTasks: () => dispatch(fetchPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
