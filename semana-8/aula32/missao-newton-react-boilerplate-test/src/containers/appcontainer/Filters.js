import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  filterAllTasksAction,
  filterCompletedTasksAction,
  filterTodoTasksAction,
  sendDeleteAll,
  sendCompleteAll
} from "../../actions/Actions.js";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

const StyledButton = styled(Button)`
  margin-right: 8px;
  margin-top: 8px;
`;
class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: ""
    };
  }

  handleClickCompleted = () => {
    this.props.filterCompletedTasks();
    this.setState({ active: "Completed" });
  };
  handleClickTodo = () => {
    this.props.filterTodoTasks();
    this.setState({ active: "Todo" });
  };
  handleClickAll = () => {
    this.props.filterAllTasks();
    this.setState({ active: "none" });
  };

  render() {
    return (
      <React.Fragment>
        <StyledButton
          variant="outlined"
          size="small"
          onClick={this.handleClickAll}
        >
          Todas
        </StyledButton>
        <StyledButton
          variant="outlined"
          size="small"
          onClick={this.handleClickCompleted}
          color={this.state.active === "Completed" ? "secondary" : ""}
        >
          Completadas
        </StyledButton>
        <StyledButton
          variant="outlined"
          size="small"
          onClick={this.handleClickTodo}
          color={this.state.active === "Todo" ? "secondary" : ""}
        >
          Pendentes
        </StyledButton>
        <StyledButton
          variant="outlined"
          color="primary"
          onClick={() => {
            this.props.sendCompleteAll();
          }}
          size="small"
        >
          COMPLETAR TODAS
          <DoneIcon />
        </StyledButton>
        <StyledButton
          variant="outlined"
          color="secondary"
          onClick={() => {
            this.props.sendDeleteAll();
          }}
          size="small"
        >
          DELETAR TODAS
          <DeleteIcon />
        </StyledButton>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    filterAllTasks: () => dispatch(filterAllTasksAction()),
    filterCompletedTasks: () => dispatch(filterCompletedTasksAction()),
    filterTodoTasks: () => dispatch(filterTodoTasksAction()),
    sendDeleteAll: () => dispatch(sendDeleteAll()),
    sendCompleteAll: () => dispatch(sendCompleteAll())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Filters);
