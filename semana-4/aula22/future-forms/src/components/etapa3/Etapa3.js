import React from "react";

export function Etapa3(props) {
  return (
    <div>
      <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

      <div>
        <p>1. Por que você não terminou um curso de graduação? </p>
        <input type="text" />
      </div>
      <div>
        <p>2. Você fez algum curso complementar ?</p>
        <select>
          <option value="tecnico">Curso técnico</option>
          <option value="ingles">Curso de inglês</option>
          <option value="nenhum">Não fiz nenhum curso complementar</option>
        </select>
      </div>
    </div>
  );
}

export default Etapa3;
