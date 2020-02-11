import * as functions from 'firebase-functions';
import express from 'express'
import cors from 'cors'
import { signUpEndpoint } from './presentation/user/signUpEndpoint';
import admin from 'firebase-admin';
import { loginEndpoint } from './presentation/user/loginEndpoint';
import { changePasswordEndpoint } from './presentation/user/changePasswordEndpoint';
import { uploadVideoEndpoint } from './presentation/video/uploadVideoEndpoint';
import { getUserVideosEndpoint } from './presentation/video/getUserVideosEndpoint';
import { editUserVideoEndpoint } from './presentation/video/editUserVideoEndpoint';
import { deleteUserVideoEnpoint } from './presentation/video/deleteUserVideoEndpoint';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//



admin.initializeApp();

const app = express();

app.use(cors());

app.post("/signup", signUpEndpoint);
app.post("/login", loginEndpoint);
app.post("/changePassword", changePasswordEndpoint);
app.post("/uploadVideo", uploadVideoEndpoint);
app.get("/getUserVideos", getUserVideosEndpoint);
app.post("/editVideoInfo", editUserVideoEndpoint);
app.delete("/deleteVideo", deleteUserVideoEnpoint);
export const endpoint = functions.https.onRequest(app);