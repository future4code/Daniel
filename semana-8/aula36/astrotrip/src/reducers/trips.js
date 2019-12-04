const initialState = {};

const trips = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TRIPS":
            return { ...state, trips: action.payload.trips };
        case "SET_TRIP_DETAIL":
            return { ...state, tripDetail: action.payload.tripDetail };
        default:
            return state;
    }
};

export default trips;
