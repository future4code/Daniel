import {
  CREATE_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  CHANGE_TASKINPUT_VALUE,
  FILTER_ALL_TASKS,
  FILTER_DONE_TASKS,
  FILTER_TODO_TASKS,
  SET_TASKS
} from "../constants/index";
import axios from "axios";

export const setTasksAction = taskList => {
  return {
    type: SET_TASKS,
    payload: {
      tasks: taskList
    }
  };
};

export const fetchPosts = () => async (dispatch, getState) => {
  const result = await axios.get(
    "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/daniel/todos"
  );

  dispatch(setTasksAction(result.data.todos));
};

export function createTaskAction(taskName) {
  return {
    type: CREATE_TASK,
    payload: {
      id: Date.now(),
      name: taskName,
      done: false
    }
  };
}

export function completeTaskAction(taskID) {
  return {
    type: COMPLETE_TASK,
    payload: {
      id: taskID
    }
  };
}

export const removeTaskAction = taskID => {
  return {
    type: DELETE_TASK,
    payload: {
      id: taskID
    }
  };
};

export const changeTaskInputValueAction = inputValue => {
  return {
    type: CHANGE_TASKINPUT_VALUE,
    payload: {
      value: inputValue
    }
  };
};

export function filterAllTasksAction() {
  return {
    type: FILTER_ALL_TASKS
  };
}
export function filterCompletedTasksAction() {
  return {
    type: FILTER_DONE_TASKS
  };
}
export function filterTodoTasksAction() {
  return {
    type: FILTER_TODO_TASKS
  };
}
