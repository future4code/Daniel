import express, { Request, Response } from 'express'
import { signUpEndpoint } from './signUp'


const app = express()
app.use(express.json()) // Linha mágica (middleware)
app.post("/signup", signUpEndpoint);
export default app