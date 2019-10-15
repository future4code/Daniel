import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import DetalheUsuario from "./DetalheUsuario";

const apiToken = "0d9df3ca53dd0c469bd3d30469d5d1b8";

const LinkCentralizado = styled.a`
  display: flex !important;
  align-items: center !important;
  width: 100%;
`;
export default class ListarUsuario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todosIds: [],
      todosUsuarios: [],
      mostraDetalhe: false
    };
  }

  getAllUsers = () => {
    const request = axios.get(
      "https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers",
      {
        headers: {
          "api-token": apiToken
        }
      }
    );
    request
      .then(response => {
        this.setState({ todosIds: response.data.result });
        this.renderAllUsers();
      })
      .catch(error => {
        console.log(error);
      });
  };
  renderAllUsers = () => {
    this.state.todosIds.forEach(element => {
      const request = axios.get(
        `https://us-central1-future4-users.cloudfunctions.net/api/users/getUser/${element.id}`,
        {
          headers: {
            "api-token": apiToken
          }
        }
      );
      request
        .then(response => {
          this.setState({
            todosUsuarios: [...this.state.todosUsuarios, response.data.result]
          });
        })
        .catch(error => {
          console.log(error);
        });
    });
  };
  componentDidMount() {
    this.getAllUsers();
  }
  handleClickDelete = e => {
    if (window.confirm("Tem certeza disso ?")) {
      this.deleteUser(e.target.id);
    }
  };
  deleteUser = index => {
    const user = this.state.todosUsuarios[index];
    const request = axios.delete(
      `https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?id=${user.id}`,
      {
        headers: {
          "api-token": apiToken
        }
      }
    );
    request.then(()=>{
        alert(`${user.name} foi deletado!`);
        const newUsersListing = [...this.state.todosUsuarios];
        newUsersListing.splice(index,1);
        this.setState({
            todosUsuarios: newUsersListing
        })
    })
    .catch((error)=>{
        console.log(error);
    })
  };
  render() {
    const todosUsuarios = this.state.todosUsuarios.map((element, index) => {
      return (
        <li className="collection-item avatar" key={index}>
          <a href="#2" className="black-text" onClick={this.handleClick}>
            <i className="material-icons circle">grade</i>
            <p className="title">{element.name}</p>
            <p className="light">Email: {element.email} </p>
          </a>
          <a
            id={index}
            className="secondary-content waves-effect waves-light btn red darken-3"
            onClick={this.handleClickDelete}
          >
            <i className="material-icons right">cancel</i>Deletar
          </a>
        </li>
      );
    });

    return (
      <div className="container">
        <h3 className="header center blue-text text-darken-1">
          Todos usuários
        </h3>
        <ul className="collection">{todosUsuarios}</ul>
      </div>
    );
  }
}
