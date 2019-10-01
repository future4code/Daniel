import React from 'react';
import avatar from './img/facebook.png';
import email from './img/email.svg';
import house from './img/house.svg';
import expand from './img/expand.svg';
import './App.css';
import {BigCard} from './components/BigCard/BigCard.js'
import {SmallCard} from './components/SmallCard/SmallCard.js'
import {ImageButton} from './components/ImageButton/ImageButton.js'

const imagemEmail = email;
const imagemEndereco = house;
const botaoVerMais = {
  imagem: expand,
  texto: "Ver Mais"
}
const pessoa = {
  nome: "Daniel Almeida",
  avatar: avatar,
  textoPerfil:"Lorem ipsum dolor sit amet, id justo option democritum vis. Ea pro esse probo dissentiunt. Nobis tation te pro, ex veri offendit phaedrum sed.",
  email: "dan.felipe@live.com",
  endereco: "Rua Portugal, 35"
}


function App() {
  return (
    <div className="App">
      <BigCard nome={pessoa.nome} avatar={pessoa.avatar} texto={pessoa.textoPerfil}/>
      <SmallCard imagem={imagemEmail} chave="Email" valor={pessoa.email} />
      <SmallCard imagem={imagemEndereco} chave="Endereço" valor={pessoa.endereco} />
      <ImageButton imagem={botaoVerMais.imagem} texto={botaoVerMais.texto}/>
    </div>
  );
}

export default App;
