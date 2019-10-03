import React from 'react'
import './BigCard.css'
import PropTypes from 'prop-types'

export function BigCard(props){
    return (
        <div className="bigcard-container">
            <img src={props.avatar} alt={props.nome}/>
            <div>
                <h3>{props.nome}</h3>
                <p>{props.texto}</p>
            </div>
        </div>
    )
}

BigCard.propTypes = {
    nome: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    texto: PropTypes.string
}