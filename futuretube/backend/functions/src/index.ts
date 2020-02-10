import * as functions from 'firebase-functions';
import express from 'express'
import cors from 'cors'
import { signUpEndpoint } from './presentation/signUpEndpoint';
import admin from 'firebase-admin';
import { loginEndpoint } from './presentation/loginEndpoint';
import { changePasswordEndpoint } from './presentation/changePasswordEndpoint';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//



admin.initializeApp();

const app = express();

app.use(cors());

app.post("/signup", signUpEndpoint);
app.post("/login", loginEndpoint);
app.post("/changePassword", changePasswordEndpoint);
export const endpoint = functions.https.onRequest(app);