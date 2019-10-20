import React, { Component } from "react";

export default class MusicPlayer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <audio src={this.props.music} controls>
        </audio>
      </div>
    );
  }
}
