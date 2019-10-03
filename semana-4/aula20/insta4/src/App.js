import React from "react";
import "./App.css";
import { Post } from "./components/Post/Post.js";
import styled from "styled-components";

const FormNewPost = styled.section`
    border: 1px solid black;
    position: sticky;
    top: 0;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    background: white;
`;

const Wrapper = styled.div`
    display: grid;
    min-width: 414px;
    width: 30%;
    margin: 0 auto;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valorInputNome: "",
            valorInputAvatar: "",
            valorInputPost: "",
            postList: []
        };
    }

    onChangeInputNome = event => {
        this.setState({ valorInputNome: event.target.value });
    };
    onChangeInputAvatar = event => {
        this.setState({ valorInputAvatar: event.target.value });
    };
    onChangeInputPost = event => {
        this.setState({ valorInputPost: event.target.value });
    };

    onKeyPressEnter = event => {
        const code = event.which;
        if (code === 13) {
            this.addPost();
        }
    };

    addPost = () => {
        const newPost = {
            nome: this.state.valorInputNome,
            avatar: this.state.valorInputAvatar,
            postImage: this.state.valorInputPost
        };
        const newPostList = [...this.state.postList, newPost];
        this.setState({
            postList: newPostList,
            valorInputAvatar: "",
            valorInputNome: "",
            valorInputPost: "",
            newPost: false
        });
    };
    render() {
        const posts = this.state.postList.map(element => {
            return (
                <Post
                    nome={element.nome}
                    avatar={element.avatar}
                    postImage={element.postImage}
                />
            );
        });

        return (
            <section className="App">
                <Wrapper>
                    <FormNewPost>
                        <h1>New Post</h1>
                        <input
                            placeholder="Nome do usuário"
                            type="text"
                            value={this.state.valorInputNome}
                            onChange={this.onChangeInputNome}
                        />
                        <input
                            placeholder="http://url.do.seu.avatar.com.br"
                            type="url"
                            value={this.state.valorInputAvatar}
                            onChange={this.onChangeInputAvatar}
                        />
                        <input
                            placeholder="http://url.da.image.com.br"
                            type="url"
                            value={this.state.valorInputPost}
                            onChange={this.onChangeInputPost}
                            onKeyPress={this.onKeyPressEnter}
                        />
                    </FormNewPost>
                    {posts}
                </Wrapper>
            </section>
        );
    }
}

export default App;
