import express, { Request, Response } from 'express'
import { signUpEndpoint } from './signUpEndpoint'
import { loginEndpoint } from './loginEndpoint';
import { getUserInfoEndpoint } from './getUserInfoEndpoint';
import { ChangePasswordEndpoint } from './changePasswordEndpoint';


const app = express()
app.use(express.json()) // Linha mágica (middleware)
app.post("/signup", signUpEndpoint);
app.post("/login", loginEndpoint);
app.get("/getMyInfo", getUserInfoEndpoint);
app.post("/changePassword", ChangePasswordEndpoint);
export default app