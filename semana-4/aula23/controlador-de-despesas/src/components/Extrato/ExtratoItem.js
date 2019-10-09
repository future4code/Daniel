import React, { Component } from 'react'
import styled from 'styled-components'

const ItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;

    > *{
        margin-right: 5px;
    }
    
`

export default class ExtratoItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <ItemWrapper>
                <p>{this.props.despesa.desc}</p>
                <p>{this.props.despesa.tipo.charAt(0).toUpperCase() + this.props.despesa.tipo.slice(1)}</p>
                <p>{this.props.despesa.valor}</p>
            </ItemWrapper>
        )
    }
}
