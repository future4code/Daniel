import React from "react";
import "./App.css";
import Etapa1 from "./components/etapa1/Etapa1";
import Etapa2 from "./components/etapa2/Etapa2";
import Etapa3 from "./components/etapa3/Etapa3";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etapaAtual: 1
    };
  }
  handleButtonClick = () => {
    debugger
    let novaEtapa = this.state.etapaAtual;
    novaEtapa = novaEtapa === 4 ? (novaEtapa = 1) : ++novaEtapa;
    this.setState({ etapaAtual: novaEtapa });
  };
  render() {
    let etapa;
    if(this.state.etapaAtual===1){etapa=<Etapa1/>}
    if(this.state.etapaAtual===2){etapa=<Etapa2/>}
    if(this.state.etapaAtual===3){etapa=<Etapa3/>}
    if(this.state.etapaAtual===4){etapa=<h1>Acabou!</h1>}
    return (
      <div className="App">
        {etapa}
        <button onClick={this.handleButtonClick}>Continuar</button>
      </div>
    );
  }
}

export default App;
