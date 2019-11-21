const initialState = {
    alltasks: []
}

export const tasks = (state = initialState,action) => {
    switch(action.type){
        case "SET_TASKS":
            return {...state, alltasks: action.payload.tasks}
        default:
            return state
    }
}