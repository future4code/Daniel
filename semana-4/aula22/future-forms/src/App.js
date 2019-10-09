import React from "react";
import "./App.css";
import Etapa1 from "./components/etapa1/Etapa1";
import Etapa2 from "./components/etapa2/Etapa2";
import Etapa3 from "./components/etapa3/Etapa3";
import Etapa4 from "./components/etapa4/Etapa4";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etapaAtual: 1
    };
  }
  handleClickNextForm = (form) => {
    if(form.etapaAtual === 1 && (form.respostaChave === "esc" ||form.respostaChave === "esi" )){
      this.setState({
        etapaAtual: 2
      });
    }
    if(form.etapaAtual === 1 && (form.respostaChave === "emi" ||form.respostaChave === "emc" )){
      this.setState({
        etapaAtual: 3
      });
    }
    if(form.etapaAtual === 2 ||form.etapaAtual === 3 ){
      this.setState({
        etapaAtual: 4
      });
    }

  }
  render() {
    let etapa;
    if (this.state.etapaAtual === 1) {
      etapa = <Etapa1 onClickButton={this.handleClickNextForm} />;
    }
    if (this.state.etapaAtual === 2) {
      etapa = <Etapa2 onClickButton={this.handleClickNextForm} />;
    }
    if (this.state.etapaAtual === 3) {
      etapa = <Etapa3 onClickButton={this.handleClickNextForm}/>;
    }
    if (this.state.etapaAtual === 4) {
      etapa = <Etapa4 />;
    }
    return <div className="App">{etapa}</div>;
  }
}

export default App;
