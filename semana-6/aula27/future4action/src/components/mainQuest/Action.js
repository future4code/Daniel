import React, { Component } from "react";

export default class MainQuest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const name = this.props.action.activity || "";
    return (
      <div class="nes-container with-title is-centered is-rounded is-dark">
        <p class="title">Main Quest</p>
        {name} <br />
        <a href="#" class="nes-badge is-splited">
          <span class="is-warning">{1 - this.props.action.accessibility || ""}</span>
          <span class="is-primary">Pts</span>
        </a>
        
      </div>
    );
  }
}
