import { createSlice } from '@reduxjs/toolkit';

interface NewBoardFormState {
  isFormOpen: boolean;
}

const initialState: NewBoardFormState = {
  isFormOpen: false,
};

const newBoardForm = createSlice({
  name: 'newboardform',
  initialState,
  reducers: {
    toggleForm: (state) => {
      state.isFormOpen = !state.isFormOpen;
    },
  },
});

export const { toggleForm } = newBoardForm.actions;

export default newBoardForm.reducer;
