import React, { Component } from "react";
import axios from "axios";
import MostraUsuario from './MostraUsuario'
import EditaUsuario from './EditaUsuario'
const apiToken = "0d9df3ca53dd0c469bd3d30469d5d1b8";



export default class DetalheUsuario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
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
          user: response.data.result,
          mostraEdit: false
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
  handleSendEdit = (userRecebido) => {
    const usuarioEditado = {
      user: {
        id: this.state.user.id,
        name: userRecebido.name,
        email: userRecebido.email
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
        this.getUser();
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
        <EditaUsuario user={this.state.user} sendEdit = {this.handleSendEdit}/>
      );
    } else {
      edit = (
        <MostraUsuario user={this.state.user} clickEdit={this.handleClickEdit} clickDelete={this.handleClickDelete}/>
      );
    }
    return <section className="container">{edit}</section>;
  }
}