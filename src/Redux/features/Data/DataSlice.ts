import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from "../../../../data.json";

interface DataState {
  data: typeof data | null;
}

const initialState: DataState = {
  data: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<typeof data>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
