import React, { Component } from 'react'

export default class FilterAction extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>{this.props.nome}</button>
            </div>
        )
    }
}
