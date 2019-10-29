import React from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { connect } from "react-redux";
import { createTaskAction, changeTaskInputValueAction } from "../actions/Actions";

const StyledInput = styled(TextField)`
  border-radius: 3px;
  width: 100%;
`;

function TaskInput(props) {
	const handleKeyPress = (e) =>{
		if(e.key === "Enter"){
			props.handleCreateTask(props.inputValue)
		}
	}
  return (
    <React.Fragment>
      <StyledInput
        id="outlined-email-input"
        label="T A S K"
        value={props.inputValue}
        type="text"
        name="taskinput"
        margin="normal"
		variant="outlined"
		onChange={(e)=>{props.handleChangeInput(e.target.value)}}
		onKeyPress={handleKeyPress}
      />
    </React.Fragment>
  );
}
const mapDispatchToProps = dispatch => {
  return {
	handleChangeInput: value => dispatch(changeTaskInputValueAction(value)),
	handleCreateTask: taskName => dispatch(createTaskAction(taskName))
  };
};
const mapStateToProps = state => {
  return {
    inputValue: state.tasks.currentInputTaskValue
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskInput);
