import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";
export const loginAction = (email, password) => async dispatch => {
    try {
        const response = await axios.post(
            "https://us-central1-missao-newton.cloudfunctions.net/futureX/daniel/login",
            {
                email,
                password
            }
        );
        window.localStorage.setItem("token", response.data.token);
        dispatch(push(routes.triplist));
    } catch (e) {
        console.log(e.message);
    }
};
