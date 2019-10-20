import React, { Component } from "react";


export default class CreatePlaylist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameValue: ""
    };
  }
  onChangeName = e => {
    this.setState({
      nameValue: e.target.value
    });
  };
  handleCreatePlaylist = () => {
      this.props.onCreatePlaylist(this.state.nameValue);
  }
  render() {
    return (
      <div >
        <label htmlFor="playlist_name">New playlist: </label>
        <input
          name="playlist_name"
          value={this.state.nameValue}
          onChange={this.onChangeName}
        />
        <button className="button" onClick={this.handleCreatePlaylist}>Create!</button>
      </div>
    );
  }
}
