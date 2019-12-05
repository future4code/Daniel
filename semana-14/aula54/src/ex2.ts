import axios, { AxiosResponse } from 'axios';

const args: string[] = process.argv.slice(4);
const action: string = args[0];
const posts: string[] = args.slice(1);
const baseUrl: string = "https://jsonplaceholder.typicode.com/posts/";
const commentsEndpoint: string = "/comments";

switch (action) {
    case "getPost":
        const post:Promise<AxiosResponse<any>> = axios.get(`${baseUrl}${args[1]}`);
        post
            .then(result => console.log(result.data))
            .catch(err => console.log(err));
        break;
    case "getPosts":
        const promises = posts.map(postId => axios.get(`${baseUrl}${postId}`));
        const allPosts = Promise.all(promises);
        allPosts
            .then(result => {
                const postsResult = result.map(post => post.data);
                console.log(postsResult)
            })
            .catch(err => console.log(err));
        break;
    case "getPostComments":
        const promise:Promise<AxiosResponse<any>> = axios.get(`${baseUrl}${args[1]}${commentsEndpoint}`);
        promise
            .then(result => console.log(result.data))
            .catch(err => console.log(err));
        break;
    default:
        console.log("Comando inválido");
        break;

}

