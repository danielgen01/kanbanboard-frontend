import { createSlice } from '@reduxjs/toolkit';

interface newTaskFormState {
  isTaskFormOpen: boolean;
}

const initialState: newTaskFormState = {
  isTaskFormOpen: false,
};

const newTaskForm = createSlice({
  name: 'newTaskForm',
  initialState,
  reducers: {
    toggleNewTaskForm: (state) => {
      state.isTaskFormOpen = !state.isTaskFormOpen;
    },
  },
});

export const { toggleNewTaskForm } = newTaskForm.actions;

export default newTaskForm.reducer;
