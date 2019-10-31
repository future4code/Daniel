const initialState = {};

const profiles = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PROFILE_SWIPE":
            return { ...state, profile: action.payload.profile };
        case "SET_MATCHES":
            return { ...state, matches: action.payload.matches };
        default:
            return state;
    }
};

export default profiles;
