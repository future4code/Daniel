import React from "react";
import styled from "styled-components";

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
  render(){
      return (
        <div>
            <input value={this.state.name} onChange={this.handleChangeInput}/>
        </div>
      );
  }
}
