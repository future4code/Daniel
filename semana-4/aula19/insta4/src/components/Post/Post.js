import React from 'react'
import PropTypes from 'prop-types'
import './Post.css'
import PostBottom from './../PostBottom/PostBottom.js'

class Post extends React.Component{

    render(){
        return (
            <section className="post-container">
                <div className="post-header">
                    <img src={this.props.avatar} alt={this.props.nome} />
                    <h3>{this.props.nome}</h3>
                </div>
                <img src={this.props.postImage} alt="" className="post-image" />
                <PostBottom/>
            </section>
        );
    }
}

Post.propTypes = {
    nome: PropTypes.string.isRequired
}
export {Post}