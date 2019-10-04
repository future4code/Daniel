import React from "react";
import styled from "styled-components";

const MensagemEnviada = styled.p`
    margin-left: 10px;
`;
const NomeDoUsuario= styled.span`
    font-weight: bold;
`
export class Mensagem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MensagemEnviada>
               <NomeDoUsuario>{this.props.autor}</NomeDoUsuario>: {this.props.mensagem}
            </MensagemEnviada>
        );
    }
}
