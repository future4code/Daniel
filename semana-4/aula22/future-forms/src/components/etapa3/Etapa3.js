import React from "react";

export class Etapa3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valorSelect: "tecnico"
    };
  }
  handleClick = () => {
    this.props.onClickButton({
      etapaAtual: 3,
      respostaChave: this.state.valorSelect
    });
  };
  handleSelectChange = (e) => {
    this.setState({
      valorSelect: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

        <div>
          <p>1. Por que você não terminou um curso de graduação? </p>
          <input type="text" />
        </div>
        <div>
          <p>2. Você fez algum curso complementar ?</p>
          <select value={this.state.valorSelect} onChange={this.handleSelectChange}>
            <option value="tecnico">Curso técnico</option>
            <option value="ingles">Curso de inglês</option>
            <option value="nenhum">Não fiz nenhum curso complementar</option>
          </select>
        </div>
        <button onClick={this.handleClick}>Proximo</button>
      </div>
    );
  }
}

export default Etapa3;
