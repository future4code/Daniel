import React, { Component } from 'react'

export default class DetalheUsuario extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>Email: {this.props.email}</p>
            </div>
        )
    }
}
