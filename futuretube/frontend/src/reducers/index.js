import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { loginProgress } from './loginProgress';
import { feed } from './feed';
import { video } from './video';

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    loginProgress,
    feed,
    video
  });
