const initialState = {};

const trips = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TRIPS":
            return { ...state, trips: action.payload.trips };
        default:
            return state;
    }
};

export default trips;