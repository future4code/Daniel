import React, { Component } from "react";
import styled from "styled-components";

const HudGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ExpBar = styled.div`
  display: flex;
`;
const Stats = styled.div`
  flex: 1;
`;
export default class Hud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameValue: "",
      showNameEdit: false
    };
  }
  handleNameClick = () => {
    this.setState({ showNameEdit: !this.state.showNameEdit });
  };
  onChangeNameEdit = e => {
    this.setState({ nameValue: e.target.value });
  };
  onKeyPressNameEdit = e => {
    if (e.key === "Enter") {
      this.handleNameClick();
    }
  };
  render() {
    let name;
    if (this.state.showNameEdit) {
      name = (
        <div className="nes-field is-inline">
          <input
            type="text"
            id="dark_field"
            className="nes-input is-dark"
            placeholder="YOUR NAME"
            onChange={this.onChangeNameEdit}
            onKeyPress={this.onKeyPressNameEdit}
          />
        </div>
      );
    } else {
      name = (
        <div>
          <div onDoubleClick={this.handleNameClick}>
            <p>{this.state.nameValue || "YOU"}</p>
          </div>
          <p>Level: {this.props.level}</p>
        </div>
      );
    }
    return (
      <div className="nes-container is-rounded hud is-dark">
        <HudGrid>
          <div>
            <i className="nes-ash" />
          </div>
          <Stats>
            {name}
            <ExpBar>
              <p>EXP</p>
              <progress
                className="nes-progress is-primary"
                value={this.props.exp}
                max={this.props.maxexp}
              />
            </ExpBar>
          </Stats>
        </HudGrid>
      </div>
    );
  }
}
