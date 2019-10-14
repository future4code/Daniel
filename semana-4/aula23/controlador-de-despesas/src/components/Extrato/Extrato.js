import React, { Component } from "react";
import ExtratoFiltros from "./ExtratoFiltros.js";
import ExtratoLista from "./ExtratoLista.js";
import "../../App.css"

export class Extrato extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todasDespesas: props.todasDespesas
    };
  }

  onChangeFilter = e => {
    if (e === "vmax") {
      const despesasValorMaximo = [...this.state.todasDespesas];
      despesasValorMaximo.sort((a, b) => b.valor - a.valor);
      this.setState({
        todasDespesas: despesasValorMaximo
      });
    }
    if (e === "vmin") {
      const despesasValorMinimo = [...this.state.todasDespesas];
      despesasValorMinimo.sort((a, b) => a.valor - b.valor);
      this.setState({
        todasDespesas: despesasValorMinimo
      });
    }
    if (e === "reset") {
      this.setState({
        todasDespesas: this.props.todasDespesas
      });
    }
    if (e === "previsto" || e === "realizado" || e === "historico") {
      const despesasTipo = this.props.todasDespesas.filter(despesa => {
        return despesa.tipo === e;
      });
      this.setState({
        todasDespesas: despesasTipo
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Extrato</h1>
        <button onClick={()=> this.props.onClickExtrato("criaDespesa")} className="nes-btn is-warning">Voltar</button>
        <ExtratoFiltros onChangeFilter={this.onChangeFilter} />
        <ExtratoLista todasDespesas={this.state.todasDespesas} />
      </div>
    );
  }
}

export default Extrato;
