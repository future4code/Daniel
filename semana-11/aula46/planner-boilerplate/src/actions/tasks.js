import axios from 'axios'

export const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-daniel";

export const setTaskAction = (tasks) => ({
    type: "SET_TASKS",
    payload: {
        tasks: tasks
    }
})

export const fetchTasksAction = () => async (dispatch) => {
    const response = axios.get(baseURL);
    dispatch(setTaskAction(response.data))
}