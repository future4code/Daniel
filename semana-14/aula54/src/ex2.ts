import axios, { AxiosResponse } from 'axios';

const args:string[] = process.argv.slice(4);
const action:string = args[0];
const baseUrl = "https://jsonplaceholder.typicode.com/posts/";

const fetchPost = (id: string): Promise<AxiosResponse> => {
    return axios.get(`${baseUrl}${id}`);
}
switch(action){
    case "getPost":
        const post:Promise<AxiosResponse> = fetchPost(args[1]);
        post.then((response)=>{
            console.log(response.data);
        },(error)=>{
            console.log(error);
        });
        break;
    default:
        console.log("Comando inválido");
        break;

}
// const promises = args.map(id => fetchPost(id));
// Promise.all(promises).then((values: AxiosResponse[]) => {
//     const titles: string[] = values.map(post => post.data.title);
//     console.log(titles)
// })

