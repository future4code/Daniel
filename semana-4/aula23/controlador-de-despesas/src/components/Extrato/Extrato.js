import React, { Component } from 'react'
import ExtratoFiltros from './ExtratoFiltros.js'
import ExtratoLista from './ExtratoLista.js'

export class Extrato extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h1>Extrato</h1>
                <ExtratoFiltros/>
                <ExtratoLista todasDespesas={this.props.todasDespesas}/>
            </div>
        )
    }
}

export default Extrato