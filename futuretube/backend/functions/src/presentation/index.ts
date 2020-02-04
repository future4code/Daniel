import express from 'express'

const app = express();

app.use(express.json());

app.get("/test",(req,res)=>{
    console.log("OPA!");
    res.send("OPA!");
})
export default app