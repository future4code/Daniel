import React from "react";
import "./App.css";
import CadastrarUser from './components/CadastarUser/CadastrarUser'
import Home from "./components/Home/Home"
import ListarUsuario from './components/ListarUsuario/ListarUsuario'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      component: ""
    };
  }

  changeComponent = (component) =>{
    console.log(component)
  }
  render() {

    const component = this.state.component;
    return (
      <div className="App">
        <nav className="blue darken-2">
          <div className="nav-wrapper blue darken-2 container">
            <a className="brand-logo">
            <i className="material-icons prefix">gradient</i>
              Future4Users
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a>Cadastrar Usuário</a>
              </li>
              <li>
                <a>Todos usuários</a>
              </li>
            </ul>
          </div>
        </nav>

        <section className="section">
          <Home handleButtonClick={this.changeComponent("cadastrar")}/>
        </section>
      </div>
    );
  }
}
export default App;
