import { createSlice } from '@reduxjs/toolkit';

interface NewBoardFormState {
  isBoardFormOpen: boolean;
}

const initialState: NewBoardFormState = {
  isBoardFormOpen: false,
};

const newBoardForm = createSlice({
  name: 'newboardform',
  initialState,
  reducers: {
    toggleAddBoardForm: (state) => {
      state.isBoardFormOpen = !state.isBoardFormOpen;
    },
  },
});

export const { toggleAddBoardForm } = newBoardForm.actions;

export default newBoardForm.reducer;
