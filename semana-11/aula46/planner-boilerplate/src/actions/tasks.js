import axios from 'axios'

export const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-daniel";

export const setTaskAction = (tasks) => ({
    type: "SET_TASKS",
    payload: {
        tasks: tasks
    }
})

export const fetchTasksAction = () => async (dispatch) => {
    const response = await axios.get(baseURL);
    dispatch(setTaskAction(response.data))
}

export const postTaskAction = (text, day) => async dispatch => {
    const task = { text, day };
    const response = await axios.post(baseURL, task);

    if (response.status === 200) {
        dispatch(fetchTasksAction());
    }
};