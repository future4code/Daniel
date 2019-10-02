import React from 'react'
import PropTypes from 'prop-types'
import './PostBottom.css'
import heartWhite from './icones/favoritewhite.svg'
import heartBlack from './icones/favorite.svg'
import commentIcon from './icones/commenticon.svg'

class PostBottom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: false,
            heartIcon: heartWhite,
            favoriteCounter: 0,
            commentCounter: 0,
            formComentario: ''
        }

    }

    darLike = () => {
        let like = this.state.liked;
        let counter = this.state.favoriteCounter;
        if (like) {
            like = !like;
            counter--;
            const novoEstado = {
                liked: like,
                favoriteCounter: counter,
                heartIcon: heartWhite
            }
            this.setState(novoEstado)
        }
        else {
            like = !like;
            counter++;
            const novoEstado = {
                liked: like,
                favoriteCounter: counter,
                heartIcon: heartBlack
            }
            this.setState(novoEstado)
        }
    };

    comentar = () => {
        let form = this.state.formComentario;
        if(!form){
            form = (<div className="form-comment"><input placeholder="Algo a dizer ?" onKeyPress={this.apertouEnter}/></div>);
            this.setState({
                formComentario: form
            })
        }
    }
    apertouEnter = (event) =>{
        const code = event.which;
        if(code === 13) { 
            let counter = this.state.commentCounter;
            counter++;
            this.setState({
                formComentario: '',
                commentCounter: counter
            })
        } 
    }
    render() {
        return (
            <div className="post-bottom-container">
                <div className="favorite-container">
                    <img onDoubleClick={this.darLike} src={this.state.heartIcon} alt="" />
                    {this.state.favoriteCounter}
                </div>
                <div className="comment-container">
                    <img onClick={this.comentar} src={commentIcon} alt="" />
                    {this.state.commentCounter}
                </div>
                {this.state.formComentario}
            </div>
        );
    }
}

export default PostBottom