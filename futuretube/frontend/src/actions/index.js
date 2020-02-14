import axios from 'axios';
import { routes } from '../containers/Router'
import { push } from "connected-react-router"

const baseUrl = "https://us-central1-future-tube.cloudfunctions.net/endpoint";

export const loginAction = (email, password) => async dispatch => {
    try {
        const request = await axios.post(
            `${baseUrl}/login`,
            {
                email,
                password
            }
        );
        window.localStorage.setItem("token", request.data.token);
    } catch (e) {
        console.log(e.response);
    }

}