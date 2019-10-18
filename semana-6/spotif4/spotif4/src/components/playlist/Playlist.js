import React, { Component } from "react";
import axios from "axios";
import AddMusic from "./AddMusic";
import MusicPlayer from "./MusicPlayer";

export default class Playlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      musics: [],
      showAddMusic: false,
      urlCurrentMusic: undefined
    };
  }
  getAllMusics = () => {
    const request = axios.get(
      `https://us-central1-spotif4.cloudfunctions.net/api/playlists/getPlaylistMusics/${this.props.data.id}`,
      {
        headers: {
          auth: "0d9df3ca53dd0c469bd3d30469d5d1b8"
        }
      }
    );
    request
      .then(res => {
        this.setState({ musics: res.data.result.musics });
      })
      .catch(err => {
        console.log(err, this.props);
      });
  };
  handleBackClick = () => {
    this.props.onBackClick();
  };
  componentDidMount() {
    this.getAllMusics();
  }
  handleAddButton = () => {
    this.setState({ showAddMusic: true });
  };
  checkNewMusic = e => {
    const test = this.state.musics.filter(element => {
      if (e.name === element.name || e.url === element.url) {
        return true;
      }
      return false;
    });
    if (test.length || (!e.name || !e.artist || !e.url)) {
      alert("Essa música já está na playlist!");
    } else {
      this.addNewMusic(e);
    }
  };
  addNewMusic = e => {
    const data = {
      playlistId: this.props.data.id,
      music: {
        ...e
      }
    };
    console.log(data);
    const request = axios.put(
      `https://us-central1-spotif4.cloudfunctions.net/api/playlists/addMusicToPlaylist`,
      data,
      {
        headers: {
          auth: "0d9df3ca53dd0c469bd3d30469d5d1b8"
        }
      }
    );
    request
      .then(res => {
        alert("Música adicionada!");
        this.getAllMusics();
      })
      .catch(err => {
        console.log(err);
      });
  };
  playThisMusic = e => {
    this.setState({ urlCurrentMusic: this.state.musics[e.target.id].url });
  };
  render() {
    const musics = this.state.musics.map((element, i) => {
      return (
        <li id={i} onClick={this.playThisMusic} key={i}>
          {element.name}
        </li>
      );
    });
    console.log(this.state.urlCurrentMusic);
    return (
      <div>
        <button onClick={this.handleBackClick}>Back</button>
        <h1>{this.props.data.name}</h1>
        <div>
          {this.state.showAddMusic ? (
            <AddMusic onClickAddMusic={this.checkNewMusic} />
          ) : (
            <button onClick={this.handleAddButton}>Add Music</button>
          )}
        </div>
          <MusicPlayer music={this.state.urlCurrentMusic} />
        <ul>{musics}</ul>
      </div>
    );
  }
}
