import { createSlice } from "@reduxjs/toolkit"

interface CurrentBoardName {
  currentBoardName: string
}

const initialState: CurrentBoardName = {
  currentBoardName: "Platform Launch",
}

const currentBoardSlice = createSlice({
  name: "currentBoardName",
  initialState,
  reducers: {
    setCurrentBoardName: (state, action) => {
      state.currentBoardName = action.payload
    },
  },
})

export const { setCurrentBoardName } = currentBoardSlice.actions

export default currentBoardSlice.reducer
