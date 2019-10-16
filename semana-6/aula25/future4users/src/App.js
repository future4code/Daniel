import React from "react";
import "./App.css";
import CadastrarUser from "./components/CadastarUser/CadastrarUser";
import Home from "./components/Home/Home";
import ListarUsuario from "./components/ListarUsuario/ListarUsuario";
import Header from "./components/Header/Header";
import DetalheUsuario from "./components/ListarUsuario/DetalheUsuario";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      component: "home",
      idDoDetalhe: ""
    };
  }

  changeComponent = (novoComponente, id) => {
    this.setState({
      component: novoComponente,
      idDoDetalhe: id
    });
  };
  render() {
    let component;
    switch (this.state.component) {
      case "home":
        component = <Home handleButtonClick={this.changeComponent} />;
        break;
      case "cadastrar":
        component = <CadastrarUser />;
        break;
      case "listar":
        component = <ListarUsuario handleButtonClick={this.changeComponent} />;
        break;
      case "detalhe":
        component = (
          <DetalheUsuario
            id={this.state.idDoDetalhe}
            handleButtonClick={this.changeComponent}
          />
        );
        break;
      default:
        component = <Home handleButtonClick={this.changeComponent} />;
        break;
    }
    return (
      <div className="App">
        <Header handleButtonClick={this.changeComponent} />
        <section className="section">
          {component}
        </section>
      </div>
    );
  }
}
export default App;
