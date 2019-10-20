import React, { Component } from "react";

export default class ShowPlaylist extends Component {
  handlePlaylistClick = e => {
    const playlist = this.props.playlists.filter((element, i) => {
      if (Number(e.target.id) === i) {
        return true;
      }
      return false;
    });
    this.props.onClickPlaylist(playlist);
  };
  handleDeleteClick = e => {
    const playlist = this.props.playlists.filter((element, i) => {
      if (e === i) {
        return true;
      }
      return false;
    });
    this.props.onDeletePlaylist(playlist);
  };
  render() {
    const allPlaylists = this.props.playlists.map((element, i) => {
      return (
        <div className="show-playlist">
          <p onClick={this.handlePlaylistClick} id={i} key={i}>
            {element.name}
          </p>
          <button className="show-button button" onClick={() => this.handleDeleteClick(i)}>Delete</button>
        </div>
      );
    });
    return <div>{allPlaylists}</div>;
  }
}