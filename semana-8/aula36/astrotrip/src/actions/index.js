import axios from "axios";
const alunoParam = "daniel"

export const setTripsAction = (trips) => (
    {
        type: "SET_TRIPS",
        payload: {
            trips
        }
    }
)

export const fetchAllTrips = () => async dispatch => {
    const response = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/${alunoParam}/trips`);
        dispatch(setTripsAction(response.data.trips))
};
