import React, { Component } from "react";
import FilterButton from "./FilterButton.js";
import styled from "styled-components";
import "../../App.css";

const FilterWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  
    > button{
        width: 68px;
        flex: 1;
    }
`;
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
        <div class="nes-select">
          <select onChange={this.onChangeSelect}>
            <option value="previsto">Previsto</option>
            <option value="realizado">Realizado</option>
            <option value="historico">Histórico</option>
          </select>
        </div>
      </FilterWrapper>
    );
  }
}
