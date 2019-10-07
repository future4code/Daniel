import React from "react";
import PropTypes from "prop-types";
import PostBottom from "./../PostBottom/PostBottom.js";
import styled from "styled-components";

const PostContainer = styled.section`
    width: 100%;
    border: 1px solid black;
    margin-bottom: 30px;
`;

const PostHeader = styled.header`
    display: flex;
    padding: 5px 10px;
`;
const PostAvatar = styled.img`
    max-width: 60px;
    border-radius: 50%;
    margin-right: 10px;
`;

const PostImage = styled.img`
    min-width: 100%;
    max-width: 30%;
`;
class Post extends React.Component {
    render() {
        return (
            <PostContainer>
                <PostHeader>
                    <PostAvatar src={this.props.avatar} alt={this.props.nome} />
                    <h3>{this.props.nome}</h3>
                </PostHeader>
                <PostImage src={this.props.postImage} alt="" />
                <PostBottom />
            </PostContainer>
        );
    }
}

Post.propTypes = {
    nome: PropTypes.string.isRequired
};
export { Post };
