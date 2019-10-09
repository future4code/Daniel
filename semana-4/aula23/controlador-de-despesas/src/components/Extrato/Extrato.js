import React, { Component } from "react";
import ExtratoFiltros from "./ExtratoFiltros.js";
import ExtratoLista from "./ExtratoLista.js";

export class Extrato extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todasDespesas: props.todasDespesas
    };
  }

  onChangeFilter = e => {
    if (e === "vmax") {
      const despesasValorMaximo = this.state.todasDespesas.sort(
        (a, b) => b.valor - a.valor
      );
      this.setState({
          todasDespesas: despesasValorMaximo
      })
    }
    if (e === "vmin") {
        const despesasValorMaximo = this.state.todasDespesas.sort(
          (a, b) => a.valor - b.valor
        );
        this.setState({
            todasDespesas: despesasValorMaximo
        })
      }
  };

  render() {
    return (
      <div>
        <h1>Extrato</h1>
        <ExtratoFiltros onChangeFilter={this.onChangeFilter} />
        <ExtratoLista todasDespesas={this.state.todasDespesas} />
      </div>
    );
  }
}

export default Extrato;
