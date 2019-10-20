import React, { Component } from "react";
import CreatePlaylist from "./CreatePlaylist";
import ShowPlaylist from "./ShowPlaylist";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlists: []
    };
  }

  getAllPlaylists = () => {
    const request = axios.get(
      `https://us-central1-spotif4.cloudfunctions.net/api/playlists/getAllPlaylists`,
      {
        headers: {
          auth: "0d9df3ca53dd0c469bd3d30469d5d1b8"
        }
      }
    );
    request
      .then(res => {
        this.setState({
          playlists: res.data.result.list
        });
      })
      .catch(err => {
        alert("Nosso servidor não está se sentido bem :C");
      });
  };
  componentDidMount() {
    this.getAllPlaylists();
  }
  newPlaylistCheck = e => {
    const test = this.state.playlists.filter(element => {
      if (e === element.name) {
        return true;
      }
      return false;
    });
    if (test.length || !e) {
      alert("Playlist já existe! Escolha outro nome.");
    } else {
      this.createPlaylist(e);
    }
  };
  createPlaylist = e => {
    const data = {
      name: e
    };
    const request = axios.post(
      `https://us-central1-spotif4.cloudfunctions.net/api/playlists/createPlaylist`,
      data,
      {
        headers: {
          auth: "0d9df3ca53dd0c469bd3d30469d5d1b8"
        }
      }
    );
    request
      .then(res => {
        alert("Playlist criada com sucesso!");
        this.getAllPlaylists();
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleClickPlaylist = e => {
    this.props.onClickPlaylist(e);
  };
  handleDeletePlaylist = e => {
    this.deletePlaylist(e[0]);
  };
  deletePlaylist = playlist => {
    const request = axios.delete(
      `https://us-central1-spotif4.cloudfunctions.net/api/playlists/deletePlaylist`,
      {
        headers: {
          auth: "0d9df3ca53dd0c469bd3d30469d5d1b8"
        },
        params: {
          playlistId: playlist.id
        }
      }
    );
    request
      .then(res => {
        alert("Playlist deletada com sucesso!");
        this.getAllPlaylists();
      })
      .catch(err => {
        alert("Ocorreu algum erro :C Tente novamente após alguns segundos.");
      });
  };
  render() {
    return (
      <div>
        <div className="container">
          <h1>Spotif4</h1>
          <CreatePlaylist onCreatePlaylist={this.newPlaylistCheck} />
        </div>
        <div className="show">
          <h2>Playlists</h2>
          <ShowPlaylist
            onClickPlaylist={this.handleClickPlaylist}
            playlists={this.state.playlists}
            onDeletePlaylist={this.handleDeletePlaylist}
          />
        </div>
      </div>
    );
  }
}
