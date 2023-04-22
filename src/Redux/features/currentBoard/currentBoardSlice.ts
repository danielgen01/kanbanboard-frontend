import { createSlice } from "@reduxjs/toolkit"

interface CurrentBoardName {
  currentBoard: string
}

const initialState: CurrentBoardName = {
  currentBoard: "Platform Launch",
}

const currentBoardSlice = createSlice({
  name: "currentBoardName",
  initialState,
  reducers: {
    setCurrentBoardName: (state, action) => {
      state.currentBoard = action.payload
    },
  },
})

export const { setCurrentBoardName } = currentBoardSlice.actions

export default currentBoardSlice.reducer
