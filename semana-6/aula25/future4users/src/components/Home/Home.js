import React, { Component } from "react";

export default class Home extends Component {
constructor(props) {
    super(props)

    this.state = {
         
    }
}

  handleClick = () =>{
      this.props.handleButtonClick("cadastrar");
  }

  render() {
    return (
      <div className="container">
        <h1 className="header center blue-text text-darken-3">Future4Users</h1>
        <div className="row center">
          <h5 className="header col s12 light">
            Gerencimento de usuários de maneira simples <s>e eficiente</s>!
          </h5>
        </div>
        <div className="row center">
          <a href="#1" onClick={this.handleClick} className="waves-effect waves-light btn-large blue darken-3">
            Começar!
          </a>
        </div>
      </div>
    );
  }
}
