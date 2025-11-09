import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    setTasks: (state, action) => {
      // action: type, payload
      const tasks = action.payload
      return tasks
    },
    addTask: (state, action) => {
      const newTask = {
        completed: false,
        description: action.payload,
      }

      const updatedTasks = [...state, newTask]
      return updatedTasks
    },
    deleteTask: (state, action) => {
      const updatedTasks = state.filter((task, idx) => idx !== action.payload);
      return updatedTasks;
    },

    updateTask: (state, action) => {
      const { field, value, index } = action.payload;

      return state.map((task, idx) => {
        if (idx === index) {
          return { ...task, [field]: value };
        }
        return task;
      });
    }

  }
}
)