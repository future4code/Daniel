import React from "react";

export class Etapa1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      valorSelect: "emi"
    }
  }
  handleClick = () => {
    this.props.onClickButton({
      etapaAtual: 1,
      respostaChave: this.state.valorSelect
    });
  }
  handleSelectChange = (e) => {
    this.setState({
      valorSelect: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>ETAPA 1 - DADOS GERAIS </h1>
        <div>
          <p>1. Qual é o seu nome?</p>
          <input type="text" />
        </div>
        <div>
          <p>2. Qual é a sua idade?</p>
          <input type="text" />
        </div>
        <div>
          <p>3. Qual é o seu email?</p>
          <input type="text" />
        </div>
        <div>
          <p>4. Qual é a sua escolaridade?</p>
          <select value={this.state.valorSelect} onChange={this.handleSelectChange}>
            <option value="emi">Ensino Médio Incompleto</option>
            <option value="emc">Ensino Médio Completo</option>
            <option value="esi">Ensino Superior Incompleto</option>
            <option value="esc">Ensino Superior Completo</option>
          </select>
          <button onClick={(this.handleClick)}>Proximo</button>
        </div>
      </div>
    );
  }
}

export default Etapa1;
