import axios from "axios";
const alunoParam = "daniel";
const token = window.localStorage.getItem("token");

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
    const token = window.localStorage.getItem("token");
    const response = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/${alunoParam}/trip/${id}?=`,
        {
            headers: { auth: token }
        }
    );
    dispatch(setTripDetailAction(response.data.trip));
};

export const postTripCandidate = form => async dispatch => {
    const response = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/${alunoParam}/trips/${form.trips}/apply`,
        form
    );
};

export const postDeleteTrip = id => async dispatch => {
    const response = await axios.delete(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/${alunoParam}/trips/${id}`
    );
    dispatch(fetchAllTrips());
};

export const postDecideCandidate = (id, approved, tripId) => async dispatch => {
    const response = await axios.put(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/${alunoParam}/trips/${tripId}/candidates/${id}/decide`,
        {
            approve: approved
        },
        {
            headers: { auth: token }
        }
    );
    dispatch(fetchTripDetail(tripId));
};

export const postNewTrip = form => async dispatch => {
    const response = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/${alunoParam}/trips`,
        form,
        {
            headers: { auth: token }
        }
    );
    
};
