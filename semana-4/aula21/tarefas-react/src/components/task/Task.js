import React from "react";
import styled from "styled-components";

const FormTask = styled.input`
  text-decoration: ${props => (props.isDone ? "line-through" : "none")};
`;

export class Task extends React.Component {
  constructor(props) {
    super(props);

  }
  handleChangeInput = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleButtonClick = () => {
    this.props.onTaskChange({
        name: this.props.name,
        id: this.props.id,
        done: !this.props.done});
  };
  handleChange = (e) => {
    this.props.onTaskChange({
        name: e.target.value,
        id: this.props.id,
        done: this.props.done});
  }
  render() {
      let name = this.props.name;
    return (
      <div>
        <FormTask
          value={name}
          onChange={this.handleChange}
          isDone={this.props.done}
        />
        <button onClick={this.handleButtonClick}>Done!</button>
      </div>
    );
  }
}
