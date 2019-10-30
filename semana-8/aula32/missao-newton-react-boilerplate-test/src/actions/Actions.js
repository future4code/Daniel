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

export function createLocalTaskAction(name, id, done) {
  return {
    type: CREATE_TASK,
    payload: {
      id: id,
      text: name,
      done: done
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
export const fetchTasks = () => async (dispatch, getState) => {
  const result = await axios.get(
    "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/daniel/todos"
  );
  dispatch(setTasksAction(result.data.todos));
};
export const postTaskAction = taskName => async (dispatch, getState) => {
  const response = await axios.post(
    "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/daniel/todos",
    {
      text: taskName
    }
  );
  dispatch(
    createLocalTaskAction(
      response.data.todo.text,
      response.data.todo.id,
      response.data.todo.done
    )
  );
};

export const toggleDone = id => async (dispatch, getState) => {
  const response = await axios.put(
    `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/daniel/todos/${id}/toggle`
  );
  dispatch(completeTaskAction(id));
};

export const sendDeleteTask = id => async (dispatch, getState) => {
  const response = await axios.delete(
    `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/daniel/todos/${id}`
  );

  dispatch(removeTaskAction(id));
};

export const sendDeleteAll = () => async (dispatch, getState) => {
  getState().tasks.tasks.forEach(ele => {
    try {
      dispatch(sendDeleteTask(ele.id));
    } catch (e) {
      console.log(e);
    }
  });
};
