import React, { Component } from "react";

export default class AddMusic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameValue: "",
      artistValue: "",
      urlValue: ""
    };
  }

  onChangeName = e => {
    this.setState({ nameValue: e.target.value });
  };
  onChangeArtist = e => {
    this.setState({ artistValue: e.target.value });
  };
  onChangeUrl = e => {
    this.setState({ urlValue: e.target.value });
  };
  handleAddButton = () => {
    const newMusic = {
      name: this.state.nameValue,
      artist: this.state.artistValue,
      url: this.state.urlValue
    };
    this.props.onClickAddMusic(newMusic);
  };
  render() {
    return (
      <div className="music-form">
        <label htmlFor="name">Name: </label>
        <input
          value={this.state.nameValue}
          onChange={this.onChangeName}
          name="name"
          placeholder="name"
        />

        <label htmlFor="artist">Artist:</label>
        <input
          value={this.state.artistValue}
          onChange={this.onChangeArtist}
          name="artist"
          placeholder="artist"
        />

        <label htmlFor="url">URL: </label>
        <input
          value={this.state.urlValue}
          onChange={this.onChangeUrl}
          name="url"
          placeholder="url"
        />

        <button className="button margin-top" onClick={this.handleAddButton}>Add</button>
      </div>
    );
  }
}
