import express, { Request, Response } from 'express'
import { registerUserEndpoint } from './endpoints/registerUserEndpoint'
import { authUserEndpoint } from './endpoints/authUserEndpoint';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post("/register", registerUserEndpoint);
app.post("/auth", authUserEndpoint);

export default app