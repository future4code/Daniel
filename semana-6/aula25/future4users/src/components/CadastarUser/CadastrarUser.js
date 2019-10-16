import React, { Component } from "react";
import styled from "styled-components";
import axios from 'axios'

const apiToken = "0d9df3ca53dd0c469bd3d30469d5d1b8";

const DivCentralizada = styled.div`
  display: flex;
  justify-content: center;
`;

export default class CadastrarUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
        nameValue: "",
        emailValue: ""
    };
  }

  handleChangeName = (e) => {
    this.setState({
        nameValue: e.target.value
    })
  }
  handleChangeEmail = (e) => {
    this.setState({
        emailValue: e.target.value
    })
  }

  handleButtonClick = () => {
    const novoUsuario = {
        name: this.state.nameValue,
        email: this.state.emailValue
    };
    this.newUserRequest(novoUsuario);
  }
  newUserRequest = (novoUsuario) => {
   
    const request = axios.post(
        "https://us-central1-future4-users.cloudfunctions.net/api/users/createUser",novoUsuario,
        {
          headers: {
            "api-token": apiToken
          }
        }
      );
      request
        .then(response => {
          alert("Usuário cadastrado com sucesso!")
        })
        .catch(error => {
            alert("Não foi possível cadastrar, tente novamente.")
        });
  }
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
              <input id="icon_prefix" type="text" className="validate" value={this.state.nameValue} onChange={this.handleChangeName} />
              <label htmlFor="icon_prefix">Nome</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input id="icon_prefix" type="text" className="validate" value={this.state.emailValue} onChange={this.handleChangeEmail} />
              <label htmlFor="icon_prefix">Email</label>
            </div>
            <DivCentralizada className="col s12">
              <a
                href="#1"
                className="btn waves-effect waves-light center blue darken-3"
                onClick = {this.handleButtonClick}
              >
                Cadastrar
                <i className="material-icons right">send</i>
              </a>
            </DivCentralizada>
          </form>
        </div>
      </div>
    );
  }
}
