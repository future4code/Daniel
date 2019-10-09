import React from "react";

export class Etapa2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handleClick = () => {
    this.props.onClickButton({
      etapaAtual: 2,
      respostaChave: ""
    });
  };

  render() {
    return (
      <div>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </h1>
        <div>
          <p>1. Qual é o curso?</p>
          <input type="text" />
        </div>
        <div>
          <p>2. Qual é a instituição de ensino?</p>
          <input type="text" />
        </div>
        <button onClick={(this.handleClick)}>Proximo</button>
      </div>
    );
  }
}

export default Etapa2;
