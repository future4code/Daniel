import {
  CREATE_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  CHANGE_TASKINPUT_VALUE
} from "../constants/index";

const initialState = {
  currentInputTaskValue: "",
  tasks: [
    {
      id: 0,
      name: "Test Task",
      done: true
    }
  ]
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE_TASK:
      const doneTasks = [...state.tasks].map(ele => {
        if (ele.id === action.payload.id) {
          ele.done = !ele.done;
          return ele;
        }
        return ele;
      });
      return { ...state, tasks: doneTasks };
    case CHANGE_TASKINPUT_VALUE:
      return { ...state, currentInputTaskValue: action.payload.value };
    case CREATE_TASK:
      return {
        ...state,
        currentInputTaskValue: "",
        tasks: [...state.tasks, action.payload]
      };
    case DELETE_TASK:
      const allTasks = [...state.tasks].filter(ele => {
        return ele.id !== action.payload.id;
      });
      return { ...state, tasks: allTasks };
    default:
      return state;
  }
};

export default tasks;
