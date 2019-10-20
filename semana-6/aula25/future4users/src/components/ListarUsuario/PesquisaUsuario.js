import React, { Component } from "react";
import styled from "styled-components";

const DivCentralizada = styled.div`
  display: flex;
  justify-content: center;
`;
export default class PesquisaUsuario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameValue: ""
    };
  }

  handleChangeInput = e => {
    this.setState({
      nameValue: e.target.value
    });
  };
  handleKeyPress = (e) =>{
      if(e.key === "Enter"){
        this.props.getSerchParam(this.state.nameValue)
      }
  }
  render() {
    return (
      <form className="col s12">
        <DivCentralizada>
          <div className="input-field">
            <i className="material-icons prefix">search</i>
            <input
              id="icon_prefix"
              type="text"
              className="validate"
              onChange={this.handleChangeInput}
              onKeyPress={this.handleKeyPress}
            />
            <label htmlFor="icon_prefix">Busca</label>
          </div>
        </DivCentralizada>
      </form>
    );
  }
}
