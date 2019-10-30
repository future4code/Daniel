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

const initialState = {
  currentInputTaskValue: "",
  filter: FILTER_ALL_TASKS,
  tasks: [
    {
      id: 0,
      text: "Test Task",
      done: true
    }
  ]
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE_TASK:
      const doneTasks = [...state.tasks].map(ele => {
        if (ele.id === action.payload.id) {
          return { ...ele, done: !ele.done };
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
    case SET_TASKS:
      return { ...state, tasks: action.payload.tasks };
    case FILTER_ALL_TASKS:
      return { ...state, filter: FILTER_ALL_TASKS };
    case FILTER_DONE_TASKS:
      return { ...state, filter: FILTER_DONE_TASKS };
    case FILTER_TODO_TASKS:
      return { ...state, filter: FILTER_TODO_TASKS };
    default:
      return state;
  }
};

export default tasks;
