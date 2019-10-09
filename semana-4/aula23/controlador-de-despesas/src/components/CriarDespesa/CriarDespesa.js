import React, { Component } from "react";
import styled from "styled-components";

const FormNovaDespesa = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 425px;
  flex: 1;
  text-align: center;

  > * {
    height: 30px;
  }
`;
export class CriarDespesa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valorDesc: "",
      valorTipo: "previsto",
      valorTotal: ""
    };
  }

  handleDesc = e => {
    this.setState({
      valorDesc: e.target.value
    });
  };
  handleTipo = e => {
    this.setState({
      valorTipo: e.target.value
    });
  };
  handleValor = e => {
    this.setState({
      valorTotal: e.target.value
    });
  };
  novaDespesa = () => {
    const novaDespesa = {
      id: Date.now(),
      valor: this.state.valorTotal,
      desc: this.state.valorDesc,
      tipo: this.state.valorTipo
    };
    this.props.onNovaDespesa(novaDespesa);
  };
  render() {
    return (
      <FormNovaDespesa>
        <h1>Nova Despesa</h1>
        <input
          value={this.state.valorDesc}
          onChange={this.handleDesc}
          type="text"
          placeholder="Descrição da despesa"
        />
        <select value={this.state.valorTipo} onChange={this.handleTipo}>
          <option>Previsto</option>
          <option>Realizado</option>
          <option>Histórico</option>
        </select>
        <input
          value={this.state.valorTotal}
          onChange={this.handleValor}
          type="number"
          placeholder="Valor R$"
        />
        <button onClick={this.novaDespesa}>Criar Despesa</button>
        <button onClick={() => this.props.onClickDespesa("extrato")}>
          Extratos
        </button>
      </FormNovaDespesa>
    );
  }
}

export default CriarDespesa;
