import React, { Component } from "react";
import styled from "styled-components";

const HudGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Name = styled.div``;
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
  onKeyPressNameEdit = (e) => {
      if(e.key === "Enter"){
          this.handleNameClick()
      }
  }
  render() {
    let name;
    if (this.state.showNameEdit) {
      name = (
        <div class="nes-field is-inline">
          <input
            type="text"
            id="dark_field"
            class="nes-input is-dark"
            placeholder="YOUR NAME"
            onChange={this.onChangeNameEdit}
            onKeyPress={this.onKeyPressNameEdit}
          />
        </div>
      );
    } else {
      name = (
        <Name onDoubleClick={this.handleNameClick}>
          <p>{this.state.nameValue || "YOU"}</p>
        </Name>
      );
    }
    return (
      <div class="nes-container is-rounded hud is-dark">
        <HudGrid>
          <div>
            <i class="nes-ash" />
          </div>
          <Stats>
            {name}
            <ExpBar>
              <p>EXP</p>
              <progress class="nes-progress is-primary" value="10" max="100" />
            </ExpBar>
          </Stats>
        </HudGrid>
      </div>
    );
  }
}
