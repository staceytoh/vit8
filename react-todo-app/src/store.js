import { createStore } from "redux";

// Initial state
const initialState = {
  tasks: [] // Empty list of tasks
};

// Reducer function to handle task actions
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload] // Add a new task
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload) // Remove task by index
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(taskReducer);

export default store;
