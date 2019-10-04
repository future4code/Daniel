import React from "react";
import styled from 'styled-components'
//import PropTypes from 'prop-types'
import { Mensagem } from "./mensagem/Mensagem.js";

const Template = styled.section`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 500px;
    min-height: 100vh;
    justify-content: flex-end;
    box-sizing: border-box;
`
const Form = styled.div`
    display: flex;
    width: 100%;
`

const BarraInput = styled.input`
    flex: 1;
`
export class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valorInputUsuario: "",
            valorInputMensagem: "",
            mensagens: []
        };
    }

    inserirUsuario = event => {
        this.setState({
            valorInputUsuario: event.target.value
        });
    };
    inserirMensagem = event => {
        this.setState({
            valorInputMensagem: event.target.value
        });
    };

    enviarMensagem = () => {
        const tempoAtual = Date.now();
        console.log(tempoAtual);
        const valorDoEstadoDoAutor = this.state.valorInputUsuario;
        const valorDoEstadoDaMensagem = this.state.valorInputMensagem;
        const objetoMensagem = {
            autor: valorDoEstadoDoAutor,
            mensagem: valorDoEstadoDaMensagem,
            key: tempoAtual
        };
        
        const listaDeMensagemAtuais = [...this.state.mensagens,objetoMensagem];
        this.setState({
            mensagens: listaDeMensagemAtuais
        });
    };

    render() {
        const listaDeMensagem = this.state.mensagens.map(element => {
            return <Mensagem autor={element.autor} mensagem={element.mensagem} key={element.tempoAtual}/>;
        });
        return (
            <Template>
                {listaDeMensagem}
                <Form>
                    <input
                        type="text"
                        placeholder="Usuário"
                        onChange={this.inserirUsuario}
                    />
                    <BarraInput
                        type="text"
                        placeholder="Mensagens"
                        onChange={this.inserirMensagem}
                    />
                    <button onClick={this.enviarMensagem}>Enviar</button>
                </Form>
            </Template>
        );
    }
}

export default Chat;
