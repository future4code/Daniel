import React from "react";
import "./PostBottom.css";
import heartWhite from "./icones/favoritewhite.svg";
import heartBlack from "./icones/favorite.svg";
import commentIcon from "./icones/commenticon.svg";
import styled from 'styled-components'

const PostBottomContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-wrap: wrap;
    padding: 10px;
`;

class PostBottom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            heartIcon: heartWhite,
            favoriteCounter: 0,
            commentCounter: 0,
            formComentario: "",
            comments: []
        };
    }

    darLike = () => {
        let like = this.state.liked;
        let counter = this.state.favoriteCounter;
        if (like) {
            const novoEstado = {
                liked: !like,
                favoriteCounter: --counter,
                heartIcon: heartWhite
            };
            this.setState(novoEstado);
        } else {
            const novoEstado = {
                liked: !like,
                favoriteCounter: ++counter,
                heartIcon: heartBlack
            };
            this.setState(novoEstado);
        }
    };

    comentar = () => {
        let form = this.state.formComentario;
        if (!form) {
            form = (
                <div className="form-comment">
                    <input
                        placeholder="Algo a dizer ?"
                        onKeyPress={this.apertouEnter}
                    />
                </div>
            );
            this.setState({
                formComentario: form
            });
        } else {
            this.setState({
                formComentario: ""
            });
        }
    };
    apertouEnter = event => {
        const code = event.which;
        const text = event.target.value;
        if (code === 13) {
            let counter = this.state.commentCounter;
            let newComments = this.state.comments;
            newComments.push(text);
            this.setState({
                formComentario: "",
                commentCounter: ++counter,
                comments: newComments
            });
        }
    };

    render() {
        return (
            <PostBottomContainer>
                <div className="favorite-icon">
                    <img
                        onDoubleClick={this.darLike}
                        src={this.state.heartIcon}
                        alt=""
                    />
                    {this.state.favoriteCounter}
                </div>
                <div className="comment-icon">
                    <img onClick={this.comentar} src={commentIcon} alt="" />
                    {this.state.commentCounter}
                </div>
                {this.state.formComentario}
                <div className="comment-section">
                    {this.state.comments.map(element => (
                        <p>{element}</p>
                    ))}
                </div>
            </PostBottomContainer>
        );
    }
}

export default PostBottom;
