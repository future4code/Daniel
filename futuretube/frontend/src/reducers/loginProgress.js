const initialState = {
    trying: false,
    error: false,
    errorMessage: ""
};

export const loginProgress = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOGIN_TRY":
            return { ...state, trying: true, error: false, errorMessage: "" };
        case "SET_LOGIN_DONE":
            return { ...state, trying: false, error: false, errorMessage: "" };
        case "SET_LOGIN_ERROR":
            return { ...state, errorMessage: action.payload.message, error: true, trying: false }
        default:
            return state;
    };
};