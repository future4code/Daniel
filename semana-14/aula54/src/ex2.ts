import axios, { AxiosResponse } from 'axios';

const args: string[] = process.argv.slice(4);
const action: string = args[0];
const posts: string[] = args.slice(1);
const baseUrl: string = "https://jsonplaceholder.typicode.com/posts/";
const commentsEndpoint: string = "/comments";

const fetchPost = (id: string): Promise<AxiosResponse> => {
    return axios.get(`${baseUrl}${id}`);
}
const fetchPostComments = (id: string): Promise<AxiosResponse> => {
    return axios.get(`${baseUrl}${id}${commentsEndpoint}`);
}
switch (action) {
    case "getPost":
        const post: Promise<AxiosResponse> = fetchPost(args[1]);
        post.then((response) => {
            console.log(response.data);
        }, (error) => {
            console.log(error);
        });
        break;
    case "getPosts":
        const promises: Promise<AxiosResponse>[] = posts.map(id => fetchPost(id));
        const result = Promise.all(promises);
        result.then(
            (values: AxiosResponse[]) => {
                const titles: string[] = values.map(post => post.data);
                console.log(titles)
            }
            , (fail: AxiosResponse[]) => {
                console.log(fail)
            }
        );
        break;
    case "getPostComments":
        const comments: Promise<AxiosResponse> = fetchPostComments(args[1]);
        comments.then((response) => {
            console.log(response.data);
        }, (error) => {
            console.log(error);
        });
        break;
    default:
        console.log("Comando inválido");
        break;

}

