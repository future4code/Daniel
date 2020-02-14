const initialState = {
    url: "",
    title: "Loading",
    description: "...",
    userName: "...",
    photoUrl: ""
};

export const video = (state = initialState, action) => {
    switch (action.type) {
        case "SET_VIDEO_DETAIL":
            return { ...state, 
                url: action.payload.video.url,
                title: action.payload.video.title ,
                description: action.payload.video.description,
                userName : action.payload.user.name,
                photoUrl: action.payload.user.photoUrl
            };
        default:
            return state;
    };
};