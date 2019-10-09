import React, { Component } from 'react'

export default class ExtratoFiltros extends Component {
    render() {
        return (
            <div>
                <button>Valor Máximo</button>
                <button>Valor Minimo</button>
                <select>
                    <option>Previsto</option>
                    <option>Realizado</option>
                    <option>Histórico</option>
                </select>
            </div>
        )
    }
}
