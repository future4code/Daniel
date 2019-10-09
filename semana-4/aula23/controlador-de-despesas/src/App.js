import React from 'react';
import './App.css';
import CriarDespesa from './components/CriarDespesa/CriarDespesa'
import Extrato from './components/Extrato/Extrato'

const mockDespesas = [
  {
    id: Date.now(),
    desc: "Barra de chocolate",
    tipo: "Realizado",
    valor: 10
  },
  {
    id: Date.now(),
    desc: "Mensalidade Netflix",
    tipo: "Previsto",
    valor: 40
  },
  {
    id: Date.now(),
    desc: "Bilhete de estacionamento 09/09",
    tipo: "Histórico",
    valor: 13
  }
]
function App() {
  return (
    <div className="App">
      <Extrato todasDespesas={mockDespesas}/>
    </div>
  );
}

export default App;
