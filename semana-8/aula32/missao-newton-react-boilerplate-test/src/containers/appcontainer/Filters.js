import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  filterAllTasksAction,
  filterCompletedTasksAction,
  filterTodoTasksAction
} from "../../actions/Actions.js";

const StyledButton = styled(Button)`
  margin-right: 8px;
`;
class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorCompletedButton: "",
      colorTodoButton: ""
    };
  }

  handleClickCompleted = () => {
    this.props.filterCompletedTasks();
    if (this.state.colorCompletedButton) {
      this.setState({ colorCompletedButton: "" });
    } else {
      this.setState({ colorCompletedButton: "secondary" });
    }
  };
  handleClickTodo = () => {
    this.props.filterTodoTasks();
    if (this.state.colorTodoButton) {
      this.setState({ colorTodoButton: "" });
    } else {
      this.setState({ colorTodoButton: "secondary" });
    }
  };
  render() {
    return (
      <React.Fragment>
        <StyledButton
          variant="outlined"
          size="small"
          onClick={this.props.filterAllTasks}
        >
          Todas
        </StyledButton>
        <StyledButton
          variant="outlined"
          size="small"
          onClick={this.handleClickCompleted}
          color={this.state.colorCompletedButton}
        >
          Completadas
        </StyledButton>
        <StyledButton
          variant="outlined"
          size="small"
          onClick={this.handleClickTodo}
          color={this.state.colorTodoButton}
        >
          Pendentes
        </StyledButton>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    filterAllTasks: () => dispatch(filterAllTasksAction()),
    filterCompletedTasks: () => dispatch(filterCompletedTasksAction()),
    filterTodoTasks: () => dispatch(filterTodoTasksAction())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Filters);
