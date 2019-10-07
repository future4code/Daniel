import React from "react";
import styled from "styled-components";
const FormTask = styled.input`
  text-decoration: ${props => (props.isDone ? "line-through" : "none")};
`;
export class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      done: this.props.done
    };
  }
  handleChangeInput = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleButtonClick = () => {
    const doneCurrentValue = this.state.done;
    this.setState({
      done: !doneCurrentValue
    });
  };
  render() {
    return (
      <div>
        <FormTask
          value={this.state.name}
          onChange={this.handleChangeInput}
          isDone={this.state.done}
        />
        <button onClick={this.handleButtonClick}>Done!</button>
      </div>
    );
  }
}
