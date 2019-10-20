import React, { Component } from "react";

export default class MostraUsuario extends Component {
  handleClickEdit = () => {
    this.props.clickEdit();
  };
  handleClickDelete = () => {
    this.props.clickDelete();
  };
  render() {
    return (
      <div className="row center">
        <div className="center">
          <h3>
            {this.props.user.name}
            <a href="#2" onClick={this.handleClickEdit}>
              <i className="material-icons">edit</i>
            </a>
          </h3>
        </div>
        <div className="col s12">
          <p>Email: {this.props.user.email}</p>
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
}
