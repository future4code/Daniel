type post = {
    text: string,
    author: string,
}

const post1: post = {
    text: "The world is indeed comic, but the joke is on mankind.",
    author: "H. P. Lovecraft"
}

const post2: post = {
    text: "The most merciful thing in the world... is the inability of the human mind to correlate all its contents.",
    author: "H. P. Lovecraft"
}

const post3: post = {
    text: "É verdade, não minto!",
    author: "Serjão Berranteiro"
}

const post4: post = {
    text: "Não sou capaz de opinar",
    author: "Glória Pires"
}

const post5: post = {
    text: "Abacate é bom pro cabelo",
    author: "Vovó Juju"
}

const allPosts: post[] = [post1, post2, post3, post4, post5];

function getAllPostsFromAuthor(arr: post[], author?: string): post[] {
    if (author) {
        return arr.filter(post => post.author === author);
    }
    return arr;
}

console.log(getAllPostsFromAuthor(allPosts, "Vovó Juju"));
console.log(getAllPostsFromAuthor(allPosts, "H. P. Lovecraft"));