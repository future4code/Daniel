import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Playlist from "./components/playlist/Playlist";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPlaylist: false,
      currentPlaylist: ""
    };
  }
  handleClickPlaylist = e => {
    this.setState({
      currentPlaylist: e[0],
      showPlaylist: !this.state.showPlaylist
    });
  };
  handleClickHome = () => {
    this.setState({
      currentPlaylist: "",
      showPlaylist: !this.state.showPlaylist
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.showPlaylist ? (
          <Playlist
            data={this.state.currentPlaylist}
            onBackClick={this.handleClickHome}
          />
        ) : (
          <Home onClickPlaylist={this.handleClickPlaylist} />
        )}
      </div>
    );
  }
}
export default App;