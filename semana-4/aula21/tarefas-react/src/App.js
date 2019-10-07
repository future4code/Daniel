import React from "react";
import "./App.css";
import styled from "styled-components";
import { Task } from "./components/task/Task.js";

const FormNewTask = styled.input``;

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowForm: false,
      formNewTaskValue: "",
      tasks: []
    };
  }

  handleButtonClick = () => {
    const shouldShowFormCurrentValue = this.state.shouldShowForm;
    this.setState({
      shouldShowForm: !shouldShowFormCurrentValue
    });
  };
  handleChangeInput = e => {
    this.setState({
      formNewTaskValue: e.target.value
    });
  };
  handleKeyPressInput = e => {
    if (e.key === "Enter") {
      this.createTask();
    }
  };
  createTask = () => {
    const newTask = {
      name: this.state.formNewTaskValue,
      done: false
    };
    const allTasks = [...this.state.tasks, newTask];
    this.setState({
      tasks: allTasks
    });
  };
  render() {
    let form;
    if (this.state.shouldShowForm) {
      form = (
        <FormNewTask
          value={this.state.formNewTaskValue}
          onChange={this.handleChangeInput}
          onKeyPress={this.handleKeyPressInput}
          type="text"
        />
      );
    }
    const tasks = this.state.tasks.map((element, index) => {
      return (
        <Task
          name={element.name}
          done={element.done}
          key={index}
          index={index}
        />
      );
    });
    return (
      <div>
        <button onClick={this.handleButtonClick}>Nova Tarefa</button>
        {form}
        <hr></hr>
        {tasks}
      </div>
    );
  }
}

export default App;
