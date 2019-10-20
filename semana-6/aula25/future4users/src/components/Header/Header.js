import React, { Component } from "react";

export default class Header extends Component {
  handleClick = e => {
    switch (e.target.id) {
      case "home":
        this.props.handleButtonClick("home");
        break;
      case "cadastrar":
        this.props.handleButtonClick("cadastrar");
        break;
      case "listar":
        this.props.handleButtonClick("listar");
        break;
      default:
        this.props.handleButtonClick("home");
        break;
    }
  };
  render() {
    return (
      <nav className="blue darken-2">
        <div className="nav-wrapper blue darken-2 container">
          <a
            id="home"
            onClick={this.handleClick}
            className="brand-logo"
            href="#1"
          >
            <i className="material-icons prefix">gradient</i>
            Future4Users
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#2" id="cadastrar" onClick={this.handleClick}>
                Cadastrar Usuário
              </a>
            </li>
            <li>
              <a href="#3" id="listar" onClick={this.handleClick}>
                Todos usuários
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
