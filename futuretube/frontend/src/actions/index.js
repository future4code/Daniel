import axios from 'axios';
import { routes } from '../containers/Router'
import { push } from "connected-react-router"

const baseUrl = "https://us-central1-future-tube.cloudfunctions.net/endpoint";

function getToken() {
    return localStorage.getItem("token");
}
export const setLoginError = (message) => ({
    type: "SET_LOGIN_ERROR",
    payload: {
        message
    }
});
export const setLoginTry = () => ({
    type: "SET_LOGIN_TRY",
    payload: {
    }
});
export const setLoginDone = () => ({
    type: "SET_LOGIN_ERROR",
    payload: {
    }
});
export const setVideoFeed = (videos) => ({
    type: "SET_VIDEO_FEED",
    payload: {
        videos
    }
});
export const setVideoDetail = (user, video) => ({
    type: "SET_VIDEO_DETAIL",
    payload: {
        user,
        video
    }
});
export const signupAction = (form) => async dispatch => {
    try {
        const request = await axios.post(
            `${baseUrl}/signup`,
            {
                ...form
            }
        );
        window.localStorage.setItem("token", request.data.token);
        dispatch(push(routes.root));
    } catch (e) {
        dispatch(setLoginError(e.response.data));
    }
}
export const loginAction = (email, password) => async dispatch => {
    dispatch(setLoginTry());
    try {
        const request = await axios.post(
            `${baseUrl}/login`,
            {
                email,
                password
            }
        );
        window.localStorage.setItem("token", request.data.token);
        dispatch(push(routes.root));
        dispatch(setLoginDone());
    } catch (e) {
        dispatch(setLoginError(e.response.data));
    }
}
export const uploadVideoAction = (form) => async dispatch => {
    try {
        const request = await axios.post(
            `${baseUrl}/uploadVideo`,
            {
                ...form
            },
            {
                headers: {
                    auth: getToken()
                }
            }
        );
    } catch (e) {
        console.log(e.response)
    }
}
export const getVideoFeedAction = (page) => async dispatch => {
    try {
        const request = await axios.get(
            `${baseUrl}/getAllVideos?page=${page}`,
            {
                headers: {
                    auth: getToken()
                }
            }
        );
        dispatch(setVideoFeed(request.data.videos));
    } catch (e) {
        console.log(e.response.data);
        if (e.response.data === "jwt expired") {
            alert("Por favor faça o login novamente!");
            localStorage.clear();
            dispatch(push(routes.login));
        }
    }
}

export const getVideoAction = (id) => async dispatch => {
    try {
        const request = await axios.get(
            `${baseUrl}/getVideoInfo?videoId=${id}`,
            {
                headers: {
                    auth: getToken()
                }
            }
        );
        const { user, video } = request.data.result
        dispatch(setVideoDetail(user, video));
    } catch (e) {
        console.log(e.response.data);
        if (e.response.data === "jwt expired") {
            alert("Por favor faça o login novamente!");
            localStorage.clear();
            dispatch(push(routes.login));
        }
    }
}
