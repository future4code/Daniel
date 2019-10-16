import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const apiToken = "0d9df3ca53dd0c469bd3d30469d5d1b8";

const DivAgrupadora = styled.div`
  display: flex;
  align-items: baseline;
`;
const DivCentralizada = styled.div`
  display: flex;
  justify-content: center;
`;
export default class DetalheUsuario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      nameValue: "",
      emailValue: "",
      mostraEdit: false
    };
  }

  getUser = () => {
    const request = axios.get(
      `https://us-central1-future4-users.cloudfunctions.net/api/users/getUser/${this.props.id}`,
      {
        headers: {
          "api-token": apiToken
        }
      }
    );
    request
      .then(response => {
        this.setState({
          user: response.data.result
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.getUser();
  }
  handleClickDelete = () => {
    const user = this.state.user;
    const request = axios.delete(
      `https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?id=${user.id}`,
      {
        headers: {
          "api-token": apiToken
        }
      }
    );
    request
      .then(() => {
        alert(`${user.name} foi deletado!`);
        this.props.handleButtonClick("listar");
      })
      .catch(error => {
        alert("Não foi possível realizar a ação, por favor atualize a página.");
      });
  };
  handleClickEdit = () => {
    this.setState({
      mostraEdit: !this.state.mostraEdit
    });
  };
  handleChangeName = e => {
    this.setState({
      nameValue: e.target.value
    });
  };
  handleChangeEmail = e => {
    this.setState({
      emailValue: e.target.value
    });
  };
  handleSendEdit = () => {
    const usuarioEditado = {
      user: {
        id: this.state.user.id,
        name: this.state.nameValue,
        email: this.state.emailValue
      }
    };
    const request = axios.put(
      "https://us-central1-future4-users.cloudfunctions.net/api/users/editUser",
      usuarioEditado,
      {
        headers: {
          "api-token": apiToken
        }
      }
    );
    request
      .then(response => {
        alert("Alterações realizadas com sucesso!");
        this.setState({
          user: usuarioEditado
        });
      })
      .catch(error => {
        alert("Não foi possível realizar a alteração, tente novamente.");
        console.log(error);
      });
  };
  render() {
    let edit;
    if (this.state.mostraEdit) {
      edit = (
        <div className="row">
          <form className="col s6">
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="icon_prefix"
                type="text"
                className="validate"
                value={this.state.nameValue}
                onChange={this.handleChangeName}
              />
              <label htmlFor="icon_prefix">Nome</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                id="icon_prefix"
                type="text"
                className="validate"
                value={this.state.emailValue}
                onChange={this.handleChangeEmail}
              />
              <label htmlFor="icon_prefix">Email</label>
            </div>
            <DivCentralizada className="col s6">
              <a
                href="#1"
                className="btn waves-effect waves-light center blue darken-3"
                onClick={this.handleSendEdit}
              >
                Editar
                <i className="material-icons right">send</i>
              </a>
            </DivCentralizada>
          </form>
        </div>
      );
    } else {
      edit = (
        <div className="row">
          <DivAgrupadora>
            <h3>{this.state.user.name}</h3>
            <a href="#2" onClick={this.handleClickEdit}>
              <i className="material-icons right">edit</i>
            </a>
          </DivAgrupadora>
          <div className="col s12">
            <p>Email: {this.state.user.email}</p>
            <a
              href="#3"
              className="waves-effect waves-light btn red darken-3"
              onClick={this.handleClickDelete}
            >
              <i className="material-icons right">cancel</i>Deletar
            </a>
          </div>
        </div>
      );
    }
    return <section className="container">{edit}</section>;
  }
}
