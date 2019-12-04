const post1 = {
    text: "The world is indeed comic, but the joke is on mankind.",
    author: "H. P. Lovecraft"
};
const post2 = {
    text: "The most merciful thing in the world... is the inability of the human mind to correlate all its contents.",
    author: "H. P. Lovecraft"
};
const post3 = {
    text: "É verdade, não minto!",
    author: "Serjão Berranteiro"
};
const post4 = {
    text: "Não sou capaz de opinar",
    author: "Glória Pires"
};
const post5 = {
    text: "Abacate é bom pro cabelo",
    author: "Vovó Juju"
};
const allPosts = [post1, post2, post3, post4, post5];
function getAllPostsFromAuthor(arr, author) {
    if (author) {
        return arr.filter(post => post.author === author);
    }
    return arr;
}
console.log(getAllPostsFromAuthor(allPosts, "Vovó Juju"));
console.log(getAllPostsFromAuthor(allPosts, "H. P. Lovecraft"));
//# sourceMappingURL=ex2.js.map