import React from 'react'
import './PageSection.css'
import PropTypes from 'prop-types'


export function PageSection(props){
    return (
        <section className="pageSection-container">
            <h1>{props.heading}</h1>
            {props.children}
        </section>
    )
}

PageSection.propTypes = {
    heading: PropTypes.string.isRequired
}