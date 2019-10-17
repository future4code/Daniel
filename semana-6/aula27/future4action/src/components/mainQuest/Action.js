import React, { Component } from "react";

export default class MainQuest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDoneClick = () =>{
    this.props.doneClick();
  }
  render() {
    const name = this.props.action.activity || "";
    return (
      <div className="nes-container with-title is-centered is-rounded is-dark">
        <p className="title">
          <h3>Main Quest</h3>
          <p>
            <a href="#" className="nes-badge is-splited">
              <span className="is-warning">
                {this.props.action.accessibility || "0"}
              </span>
              <span className="is-primary">Pts</span>
            </a>
          </p>
        </p>
        {name}
        <p>
        <button type="button" onClick={this.handleDoneClick} className="nes-btn is-success">Done</button>

        <button type="button" className="nes-btn is-error">Cancel</button>
        </p>
      </div>
    );
  }
}
