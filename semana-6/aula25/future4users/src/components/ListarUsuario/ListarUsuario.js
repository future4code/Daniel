import React, { Component } from "react";
import axios from "axios";

const apiToken = "0d9df3ca53dd0c469bd3d30469d5d1b8";

export default class ListarUsuario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todosIds: [],
      todosUsuarios: []
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
          this.setState({ todosUsuarios: [...this.state.todosUsuarios,response.data.result]});
        })
        .catch(error => {
          console.log(error);
        });
    });
  };
  componentDidMount() {
    this.getAllUsers();
  }
  render() {
    const todosUsuarios = this.state.todosUsuarios.map(element => {
      return (
        <li key={Date.now()} className="collection-item avatar">
          <i className="material-icons circle">grade</i>
          <span className="title">{element.name}</span>
          <p>Email: {element.email} </p>
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
