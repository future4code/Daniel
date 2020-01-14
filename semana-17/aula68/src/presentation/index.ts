import express, { Request, Response } from 'express'
import { signUpEndpoint } from './signUp'
import { loginEndpoint } from './login';


const app = express()
app.use(express.json()) // Linha mágica (middleware)
app.post("/signup", signUpEndpoint);
app.post("/login", loginEndpoint);
export default app