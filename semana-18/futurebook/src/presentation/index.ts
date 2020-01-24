import express, { Request, Response } from 'express'
import { registerUserEndpoint } from './endpoints/registerUserEndpoint'
import { authUserEndpoint } from './endpoints/authUserEndpoint';
import { toogleRelationsUserEndpoint } from './endpoints/toogleRelationsUserEndpoint';
import { createPostEndpoint } from './endpoints/createPostEndpoint';
import { getUserFeedEndpoint } from './endpoints/getUserFeedEndpoint';
import { getUserFeedByTypeEndpoint } from './endpoints/getUserFeedByTypeEndpoint';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post("/register", registerUserEndpoint);
app.post("/auth", authUserEndpoint);
app.post("/toogleFollow", toogleRelationsUserEndpoint);
app.post("/createPost", createPostEndpoint);
app.post("/getUserFeed", getUserFeedEndpoint);
app.post("/getUserFeedByType", getUserFeedByTypeEndpoint);
export default app