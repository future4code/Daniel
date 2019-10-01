import React from 'react';
import avatar from './img/facebook.png';
import email from './img/email.svg';
import house from './img/house.svg';
import expand from './img/expand.svg';
import './App.css';
import { PageSection } from './components/PageSection/PageSection.js'
import { BigCard } from './components/BigCard/BigCard.js'
import { SmallCard } from './components/SmallCard/SmallCard.js'
import { ImageButton } from './components/ImageButton/ImageButton.js'

const imagemEmail = email;
const imagemEndereco = house;
const botaoVerMais = {
  imagem: expand,
  texto: "Ver Mais"
}
const botaoFace = {
  imagem: avatar,
  texto: "Facebook"
}
const pessoa = {
  nome: "Daniel Almeida",
  avatar: avatar,
  textoPerfil: "Analista de sistemas, aluno da Future4 e futuro Desenvolvedor Web FullStack. ",
  email: "dan.felipe@live.com",
  endereco: "Rua Portugal, 35"
}

const empresa1 = {
  nome: "Mellore Alimentos",
  cargo: "Analista de sistemas",
  imagem: avatar
}

const empresa2 = {
  nome: "Motofest",
  cargo: "Assistente de TI",
  imagem: avatar
}


function App() {
  return (
    <div className="App">
      <PageSection heading="Dados Pessoais">
        <BigCard nome={pessoa.nome} avatar={pessoa.avatar} texto={pessoa.textoPerfil} />
        <SmallCard imagem={imagemEmail} chave="Email" valor={pessoa.email} />
        <SmallCard imagem={imagemEndereco} chave="Endereço" valor={pessoa.endereco} />
        <ImageButton imagem={botaoVerMais.imagem} texto={botaoVerMais.texto} />
      </PageSection>

      <PageSection heading="Experiências Profissionais">
        <BigCard nome={empresa1.nome} avatar={empresa1.imagem} texto={empresa1.cargo} />
        <BigCard nome={empresa1.nome} avatar={empresa2.imagem} texto={empresa2.cargo} />
      </PageSection>

      <PageSection heading="Minhas redes sociais">
      <ImageButton imagem={botaoFace.imagem} texto={botaoFace.texto} />
      </PageSection>
    </div>
  );
}

export default App;
