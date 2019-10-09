import React, { Component } from 'react'
import FilterAction from './FilterAction.js'
export default class ExtratoFiltros extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <FilterAction onClick={()=>this.props.onChangeFilter("vmax")} nome={"Valor Máximo"} tipo="button"/>
                <FilterAction onClick={()=>this.props.onChangeFilter("vmin")} nome={"Valor Mínimo"} tipo="button"/>
                <select>
                    <option>Previsto</option>
                    <option>Realizado</option>
                    <option>Histórico</option>
                </select>
            </div>
        )
    }
}
