import React, { Component } from 'react'
import styled from 'styled-components'

const FormNovaDespesa = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 425px;
    flex: 1;
    text-align: center;

    > *{
        height: 30px;
    }
`
export class CriarDespesa extends Component {
    render() {
        return (
            <FormNovaDespesa>
                <h1>Nova Despesa</h1>
                <input type="text" placeholder="Descrição da despesa"/>
                <select>
                    <option>Previsto</option>
                    <option>Realizado</option>
                    <option>Histórico</option>
                </select>
                <input type="text" placeholder="Descrição da despesa"/>
                <button>Criar Despesa</button>
                <button>Extratos</button>
            </FormNovaDespesa>
        );
    }
}

export default CriarDespesa
