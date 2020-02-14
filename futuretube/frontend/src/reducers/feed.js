const initialState = {
    videos: []
};

export const feed = (state = initialState, action) => {
    switch (action.type) {
        case "SET_VIDEO_FEED":
            return { ...state, videos: action.payload.videos };
        default:
            return state;
    };
};