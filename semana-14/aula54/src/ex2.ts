import axios, { AxiosResponse } from 'axios';


const args = process.argv.slice(4);
const baseUrl = "https://jsonplaceholder.typicode.com/posts/";

const fetchPost = (id:string):Promise<AxiosResponse> =>{
    return axios.get(`${baseUrl}${id}`);
}
const promises = args.map(id => fetchPost(id));
Promise.all(promises).then((values:AxiosResponse[]) => {
    const titles:string[] = values.map(post => post.data.title);
    console.log(titles)
})

