import React from "react";
import "./App.css";
import MainQuest from "./components/mainQuest/Action";
import axios from "axios";
import Hud from "./components/hud/Hud";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      action: [
        {
          activity: "Get the one quest!",
          accessibility: 1,
          type: "DIY",
          participants: 1,
          price: 0,
          link: "",
          key: "1"
        }
      ],
      exp: 0,
      level: 1
    };
  }
  getAction = () => {
    const request = axios.get(`https://www.boredapi.com/api/activity/`);
    request
      .then(res => {
        this.setState({
          action: [res.data, ...this.state.action]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getAction();
  }
  render() {
    return (
      <div className="App">
        <Hud />
        <MainQuest action={this.state.action[0]} />
      </div>
    );
  }
}

export default App;
