import React from "react";
import "./App.css";
import MainQuest from "./components/mainQuest/Action";
import axios from "axios";
import Hud from "./components/hud/Hud";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      action: "",
      exp: 0,
      maxexp: 1.5,
      level: 1
    };
  }
  getAction = () => {
    const request = axios.get(`https://www.boredapi.com/api/activity/`);
    request
      .then(res => {
        this.setState({
          action: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getAction();
  }

  checkLevel = () => {
    let level = this.state.level;
    if (this.state.exp >= this.state.maxexp) {
      this.setState({
        exp: 0,
        level: ++level
      });
    }
  };
  getReward = () => {
    const rewardExp = this.state.exp + Number(this.state.action.accessibility);
    this.setState(
      {
        exp: rewardExp
      },
      () => {
        this.checkLevel();
        this.getAction();
      }
    );
  };
  render() {
    return (
      <div className="App">
        <Hud
          exp={this.state.exp}
          level={this.state.level}
          maxexp={this.state.maxexp}
        />
        <MainQuest
          action={this.state.action}
          doneClick={this.getReward}
          cancelClick={this.getAction}
        />
      </div>
    );
  }
}

export default App;
