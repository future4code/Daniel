import React from 'react'
import PropTypes from 'prop-types'
import './ImageButton.css'

export function ImageButton(props) {
    return (
        <div className="button-container">
            <img src={props.imagem} alt="" />
            <p>{props.texto}</p>
        </div>
    )
}

ImageButton.propTypes = {
    imagem: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired
}