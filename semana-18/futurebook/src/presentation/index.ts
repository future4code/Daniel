import express, { Request, Response } from 'express'
import { registerUserEndpoint } from './endpoints/registerUserEndpoint'
import { authUserEndpoint } from './endpoints/authUserEndpoint';
import { toogleRelationsUserEndpoint } from './endpoints/toogleRelationsUserEndpoint';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post("/register", registerUserEndpoint);
app.post("/auth", authUserEndpoint);
app.post("/toogleFollow", toogleRelationsUserEndpoint);
export default app