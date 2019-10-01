import React from 'react'
import './smallcard.css'
import PropTypes from 'prop-types'

export function SmallCard(props) {
    return (
        <div className="smallcard-container">
            <img src={props.imagem} alt="" />
            <h3>{props.chave}:</h3>
            <p>{props.valor}</p>
        </div>
    )
}

SmallCard.propTypes = {
    chave: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    valor: PropTypes.string.isRequired
}