import axios from "axios";
const alunoParam = "daniel";

export const setTripsAction = trips => ({
    type: "SET_TRIPS",
    payload: {
        trips
    }
});
export const setTripDetailAction = tripDetail => ({
    type: "SET_TRIP_DETAIL",
    payload: {
        tripDetail
    }
});

export const fetchAllTrips = () => async dispatch => {
    const response = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/${alunoParam}/trips`
    );
    dispatch(setTripsAction(response.data.trips));
};

export const fetchTripDetail = id => async dispatch => {
    const response = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/${alunoParam}/trip/${id}`
    );
    dispatch(setTripDetailAction(response.data.trip));
};
