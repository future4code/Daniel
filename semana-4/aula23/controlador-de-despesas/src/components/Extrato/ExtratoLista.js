import React, { Component } from 'react'
import ExtratoItem from './ExtratoItem'
import styled from 'styled-components'

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;
`
export default class ExtratoLista extends Component {
    render() {
        const listaDeTodasDespesas = this.props.todasDespesas.map((element)=>{
            return (<ExtratoItem despesa={element}/>);
        })
        return (
            <ListWrapper>
                <Header>
                    <p>Descrição</p>
                    <p>Tipo</p>
                    <p>Valor (R$)</p>
                </Header>
                {listaDeTodasDespesas}
            </ListWrapper>
        )
    }
}
