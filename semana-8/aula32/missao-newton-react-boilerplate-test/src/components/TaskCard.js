import React from "react";
import Remove from "@material-ui/icons/Close";
import Done from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import { connect } from "react-redux";
import { removeTaskAction, completeTaskAction } from "../actions/Actions.js";

const StyledDiv = styled.div`
  flex: 1;
`;
const StyledDone = styled.p`
  color: grey;
  text-decoration: line-through;
`;
const StyledIconButton = styled(IconButton)``;

function TaskCard(props) {
  return (
    <React.Fragment>
      <StyledIconButton
        color="primary"
        onClick={() => props.completeTask(props.task.id)}
      >
        <Done />
      </StyledIconButton>
      <StyledDiv>
        {props.task.done ? (
          <StyledDone>{props.task.name}</StyledDone>
        ) : (
          <p>{props.task.name}</p>
        )}
      </StyledDiv>
      <StyledIconButton
        color="secondary"
        onClick={() => props.deleteTask(props.task.id)}
      >
        <Remove />
      </StyledIconButton>
    </React.Fragment>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    deleteTask: id => dispatch(removeTaskAction(id)),
    completeTask: id => dispatch(completeTaskAction(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TaskCard);
