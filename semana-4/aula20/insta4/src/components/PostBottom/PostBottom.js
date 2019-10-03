import React from "react";
import heartWhite from "./icones/favoritewhite.svg";
import heartBlack from "./icones/favorite.svg";
import commentIcon from "./icones/commenticon.svg";
import styled from "styled-components";

const PostBottomContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-wrap: wrap;
    padding: 10px;
`;
const CommentSection = styled.div`
    flex: 1;
    font-size: 0.9rem;
    grid-column: 1 / 3;
`;
const CommentSectionP = styled.p`
   width: 100%;
`
const CommentIcon = styled.img`
    width: 24px;
`;
const CommentIconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const FormComment = styled.div`
    grid-column: 1/3;
`;
const FormCommentInput = styled.input`
    width: 100%;
    margin: 10px 0;
    box-sizing: border-box;
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
                <FormComment>
                    <FormCommentInput
                        placeholder="Algo a dizer ?"
                        onKeyPress={this.apertouEnter}
                    />
                </FormComment>
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
                <div>
                    <img
                        onDoubleClick={this.darLike}
                        src={this.state.heartIcon}
                        alt=""
                    />
                    {this.state.favoriteCounter}
                </div>
                <CommentIconContainer>
                    <CommentIcon
                        onClick={this.comentar}
                        src={commentIcon}
                        alt=""
                    />
                    {this.state.commentCounter}
                </CommentIconContainer>
                {this.state.formComentario}
                <CommentSection>
                    {this.state.comments.map(element => (
                        <CommentSectionP>{element}</CommentSectionP>
                    ))}
                </CommentSection>
            </PostBottomContainer>
        );
    }
}

export default PostBottom;
