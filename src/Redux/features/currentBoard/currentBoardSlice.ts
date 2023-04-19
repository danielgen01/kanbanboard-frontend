import { createSlice } from '@reduxjs/toolkit';

interface CurrentBoard {
  currentBoard: string;
}

const initialState: CurrentBoard = {
  currentBoard: 'Platform Launch',
};

const currentBoardSlice = createSlice({
  name: 'currentBoard',
  initialState,
  reducers: {
    setCurrentBoard: (state, action) => {
      state.currentBoard = action.payload;
    },
  },
});

export const { setCurrentBoard } = currentBoardSlice.actions;

export default currentBoardSlice.reducer;
