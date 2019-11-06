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

export const postTripCandidate = (form) =>  async dispatch => {
    const response = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/${alunoParam}/trips/${form.tripId}/apply`,{
            name: form.name,
            profession: form.profession,
            applicationText: form.applicationText,
            age: form.age,
            country: form.country
        }
    );
}; 

export const postNewTrip = (form) =>  async dispatch => {
    const response = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/${alunoParam}/trips`,{
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }
    );
    console.log(response)
}; 
