import axios from "axios";

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
    } catch (e) {
        console.log(e.message);
    }
};
