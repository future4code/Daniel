import React from "react";
import heartWhite from "./../PostBottom/icones/favoritewhite.svg";
import heartBlack from "./../PostBottom/icones/favorite.svg";
import styled from "styled-components";
const Comment = styled.p`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
const LikeImg = styled.img`
    margin-left: 5px;

`
export class PostBottomComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heartIcon: heartWhite,
            liked: false
        };
    }
    darLikeComment = () => {
        if (!this.state.liked) {
            this.setState({
                heartIcon: heartBlack,
                liked: true
            });
        } else {
            this.setState({
                heartIcon: heartWhite,
                liked: false
            });
        }
    };
    render() {
        return (
            <Comment>
                {this.props.comment}
                <LikeImg
                    onClick={this.darLikeComment}
                    src={this.state.heartIcon}
                    alt=""
                />
            </Comment>
        );
    }
}

export default PostBottomComment;
