import React, { Component } from "react";

export default class ListarUsuario extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="header center blue-text text-darken-1">
          Todos usuários
        </h3>
        <ul className="collection">
          <li class="collection-item avatar">
            <i class="material-icons circle">grade</i>
            <span class="title">Jośe Maria</span>
            <p>Email: </p>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle">grade</i>
            <span class="title">Maria José</span>
            <p>Email: </p>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle">grade</i>
            <span class="title">José Maria</span>
            <p>Email: </p>
          </li>
        </ul>
      </div>
    );
  }
}
