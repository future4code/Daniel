import React, { Component } from "react";
import styled from "styled-components";

const DivCentralizada = styled.div`
  display: flex;
  justify-content: center;
`;
export default class CadastrarUser extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="header center blue-text text-darken-1">
          Cadastrar novo usuário
        </h3>
        <div className="row">
          <form className="col s12">
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input id="icon_prefix" type="text" className="validate" />
              <label for="icon_prefix">Nome</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input id="icon_prefix" type="text" className="validate" />
              <label for="icon_prefix">Email</label>
            </div>
            <DivCentralizada className="col s12">
              <button
                className="btn waves-effect waves-light center blue darken-3"
                name="action"
              >
                Cadastrar
                <i class="material-icons right">send</i>
              </button>
            </DivCentralizada>
          </form>
        </div>
      </div>
    );
  }
}
