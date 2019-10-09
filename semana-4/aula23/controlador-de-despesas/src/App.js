import React from "react";
import "./App.css";
import CriarDespesa from "./components/CriarDespesa/CriarDespesa";
import Extrato from "./components/Extrato/Extrato";

const mockDespesas = [
  {
    id: Date.now(),
    desc: "Barra de chocolate",
    tipo: "realizado",
    valor: 10
  },
  {
    id: Date.now(),
    desc: "Mensalidade Netflix",
    tipo: "previsto",
    valor: 40
  },
  {
    id: Date.now(),
    desc: "Bilhete de estacionamento 09/09",
    tipo: "historico",
    valor: 13
  }
];
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      componentAtual: "criaDespesa",
      todasDespesas: [...mockDespesas],
    };
  }

  componenteAtual = e => {
    console.log(e)
    this.setState({
      componentAtual: e
    });
  };

  novaDespesa = (novaDespesa) => {
    const todasNovasDespesas = [...this.state.todasDespesas,novaDespesa];
    this.setState({
      todasDespesas: todasNovasDespesas
    });
    alert(`Nova despesa criada!
    ${novaDespesa.desc}, ${novaDespesa.tipo} com o valor de ${novaDespesa.valor} reais.`)
  }
  render() {
    const componentAtual =
      this.state.componentAtual === "extrato" ? (
        <Extrato
          onClickExtrato={this.componenteAtual}
          todasDespesas={this.state.todasDespesas}
        />
      ) : (
        <CriarDespesa onClickDespesa={this.componenteAtual} onNovaDespesa={this.novaDespesa}/>
      );
    return <div className="App">{componentAtual}</div>;
  }
}

export default App;
