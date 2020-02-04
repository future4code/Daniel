import * as functions from 'firebase-functions';
import app from './presentation';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.endpoints = functions.https.onRequest(app);
