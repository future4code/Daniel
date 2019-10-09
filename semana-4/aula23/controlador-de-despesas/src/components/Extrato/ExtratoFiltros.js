import React, { Component } from "react";
import FilterButton from "./FilterButton.js";
import styled from 'styled-components'

const FilterWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`
export default class ExtratoFiltros extends Component {
  onChangeSelect = e => {
    this.props.onChangeFilter(e.target.value);
  };

  render() {
    return (
      <FilterWrapper>
        <FilterButton
          onClick={() => this.props.onChangeFilter("vmax")}
          nome={"Valor Máximo"}
        />
        <FilterButton
          onClick={() => this.props.onChangeFilter("vmin")}
          nome={"Valor Mínimo"}
        />
        <FilterButton
          onClick={() => this.props.onChangeFilter("reset")}
          nome={"Reset"}
        />
        <select onChange={this.onChangeSelect}>
          <option value="previsto">Previsto</option>
          <option value="realizado">Realizado</option>
          <option value="historico">Histórico</option>
        </select>
      </FilterWrapper>
    );
  }
}
