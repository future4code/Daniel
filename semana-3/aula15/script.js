let todosPosts = buscaItem("posts");

document.addEventListener("DOMContentLoaded", function () {
    loadAllPosts(todosPosts);
});

class Post {
    constructor(titulo, autor, post, urlDaImagem) {
        this.titulo = titulo;
        this.autor = autor;
        this.post = post;
        this.urlDaImagem = urlDaImagem;
    }
}
function buscaItem(chave) {
    const valor = window.localStorage.getItem(chave);
    if (valor) {
        return JSON.parse(valor);
    }
    return [];
}
function salvaItem(chave, item) {
    if (item && chave) {
        window.localStorage.setItem(chave, JSON.stringify(item));
    }
}
function limpaCampos() {
    const campos = document.querySelectorAll(".form input,.form textarea");
    for (let input of campos) {
        input.value = "";
    }
}
function createPost() {
    const titulo = document.querySelector("#inputTitulo");
    const autor = document.querySelector("#inputAutor");
    const imagem = document.querySelector("#inputImagem");
    const post = document.querySelector("#inputPost");

    const newPost = new Post(titulo.value, autor.value, post.value, imagem.value);

    todosPosts.push(newPost);
    salvaItem("posts", todosPosts);
    limpaCampos();
}

function loadAllPosts(posts) {
    const container = document.querySelector(".post-container");
    if (container) {
        for (let i = 0; i < posts.length; i++) {

            const tagTitulo = document.createElement("h2");
            const tagAutor = document.createElement("h3");
            const tagImagem = document.createElement("img");
            const tagPost = document.createElement("p");
            const tagCard = document.createElement("article");

            const newPost = posts[i];

            tagImagem.src = newPost.urlDaImagem;
            tagTitulo.innerHTML = newPost.titulo;
            tagAutor.innerHTML = `by ${newPost.autor}`;
            tagPost.innerHTML = newPost.post;
            tagCard.classList.add("post-card");

            tagCard.append(tagImagem,tagTitulo, tagAutor, tagPost);
            container.append(tagCard);
        }
    }
}
