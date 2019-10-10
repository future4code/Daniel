import React, { Component } from 'react'
import "../../App.css"

export default class FilterButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick} className={"nes-btn is-primary"}>{this.props.nome}</button>
            </div>
        )
    }
}
