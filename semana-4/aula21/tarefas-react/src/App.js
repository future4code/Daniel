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
      done: false,
      id: Date.now()
    };
    const allTasks = [...this.state.tasks, newTask];
    this.setState({
      tasks: allTasks
    });
  };
  handleTaskChange = task => {
    const allTasks = [...this.state.tasks];
    allTasks.forEach(element=>{
      if(element.id===task.id){
        element.name = task.name;
        element.done = task.done;
      }
    })
    this.setState({
      tasks: allTasks
    });
  };
  handleTaskDelete = task => {
    const allTasks = this.state.tasks.filter((element)=>{
      if(task.id===element.id){
        return false;
      }
      return true;
    })
    this.setState({
      tasks: allTasks
    });
  }
  eraseAllTasks = () => {
    this.setState({
      tasks: []
    })
  }
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

    let tasksToDo = this.state.tasks.filter(element => {
      return !element.done
    });

    tasksToDo = tasksToDo.map((element, index) => {
      return (
        <Task
          name={element.name}
          done={element.done}
          key={index}
          id={element.id}
          onTaskChange={this.handleTaskChange}
          onTaskDelete={this.handleTaskDelete}
        />
      );
    });

    let tasksDone = this.state.tasks.filter(element => {
      return element.done
    });
    tasksDone = tasksDone.map((element, index) => {
      return (
        <Task
          name={element.name}
          done={element.done}
          key={index}
          id={element.id}
          onTaskChange={this.handleTaskChange}
          onTaskDelete={this.handleTaskDelete}
        />
      );
    });
    return (
      <div>
        <button onClick={this.handleButtonClick}>Nova Tarefa</button>
        {form}
        <hr></hr>
        <button onClick={this.eraseAllTasks}>Limpar TUDO!</button>
        <h1>Tarefas</h1>
        {tasksToDo}
        <hr />
        <h1>Tarefas concluídas</h1>
        {tasksDone}
      </div>
    );
  }
}

export default App;
