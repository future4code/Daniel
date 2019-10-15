import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

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
            href="#"
          >
            <i className="material-icons prefix">gradient</i>
            Future4Users
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a id="cadastrar" onClick={this.handleClick}>
                Cadastrar Usuário
              </a>
            </li>
            <li>
              <a id="listar" onClick={this.handleClick}>
                Todos usuários
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
