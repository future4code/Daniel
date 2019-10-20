import React, { Component } from "react";
import styled from "styled-components";

const DivCentralizada = styled.div`
  display: flex;
  justify-content: center;
`;
export default class EditaUsuario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameValue: this.props.user.name,
      emailValue: this.props.user.email
    };
  }
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
    const userEditado = {
      name: this.state.nameValue,
      emailValue: this.state.emailValue
    };
    this.props.sendEdit(userEditado);
  };
  render() {
    return (
      <DivCentralizada>
        <form className="col s6 ">
          <div className="input-field col s12">
            <i className="material-icons prefix">account_circle</i>
            <input
              id="icon_prefix"
              type="text"
              className="validate"
              value={this.state.nameValue}
              onChange={this.handleChangeName}
            />
            <label htmlFor="icon_prefix" className="active">
              Nome
            </label>
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
            <label htmlFor="icon_prefix" className="active">
              Email
            </label>
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
      </DivCentralizada>
    );
  }
}
