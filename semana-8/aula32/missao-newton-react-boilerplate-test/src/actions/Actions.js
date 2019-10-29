import { CREATE_TASK, DELETE_TASK, COMPLETE_TASK, CHANGE_TASKINPUT_VALUE} from "../constants/index";

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
