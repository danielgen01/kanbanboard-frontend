import { createSlice } from "@reduxjs/toolkit"

interface currentTaskTitle {
  currentTaskTitle: string
}

const initialState: currentTaskTitle = {
  currentTaskTitle: "",
}

const currentTaskSlice = createSlice({
  name: "currentTaskTitle",
  initialState,
  reducers: {
    setCurrentTaskTitle: (state, action) => {
      state.currentTaskTitle = action.payload
    },
  },
})

export const { setCurrentTaskTitle } = currentTaskSlice.actions

export default currentTaskSlice.reducer
