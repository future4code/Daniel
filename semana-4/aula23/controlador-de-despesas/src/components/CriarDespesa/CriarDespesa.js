import React, { Component } from "react";
import styled from "styled-components";

const FormNovaDespesa = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 425px;
  flex: 1;
  text-align: center;
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
      valor: parseInt(this.state.valorTotal),
      desc: this.state.valorDesc,
      tipo: this.state.valorTipo
    };
    this.props.onNovaDespesa(novaDespesa);
  };
  render() {
    return (
      <FormNovaDespesa>
        <h1>Nova Despesa</h1>
        <div class="nes-field">
          <label for="name_field">Descrição da Despesa</label>
          <input
            id="name_field"
            class="nes-input"
            value={this.state.valorDesc}
            onChange={this.handleDesc}
            type="text"
            placeholder="Descrição da despesa"
          />
        </div>
        <label for="tipo_select">Tipo da Despesa</label>
        <div class="nes-select">
          <select id="tipo_select" value={this.state.valorTipo} onChange={this.handleTipo}>
            <option>Previsto</option>
            <option>Realizado</option>
            <option>Histórico</option>
          </select>
        </div>
        <div class="nes-field">
          <label for="valor_field">Descrição da Despesa</label>
          <input
            id="valor_field"
            class="nes-input"
            value={this.state.valorTotal}
            onChange={this.handleValor}
            type="number"
            placeholder="Valor R$"
          />
        </div>
        <button onClick={this.novaDespesa} className={"nes-btn is-primary"}>Criar Despesa</button>
        <button onClick={() => this.props.onClickDespesa("extrato")} className={"nes-btn is-warning"}>
          Extratos
        </button>
      </FormNovaDespesa>
    );
  }
}

export default CriarDespesa;
