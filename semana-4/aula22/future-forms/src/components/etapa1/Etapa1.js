import React from "react";

export function Etapa1(props) {
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
        <select>
          <option value="emi">Ensino Médio Incompleto</option>
          <option value="emc">Ensino Médio Completo</option>
          <option value="esi">Ensino Superior Incompleto</option>
          <option value="esc">Ensino Superior Completo</option>
        </select>
      </div>
    </div>
  );
}

export default Etapa1;
