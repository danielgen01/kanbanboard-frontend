import { createSlice } from "@reduxjs/toolkit"

interface deleteBoardFormState {
  isDeleteBoardFormOpen: boolean
}

const initialState: deleteBoardFormState = {
  isDeleteBoardFormOpen: false,
}

const deleteBoardForm = createSlice({
  name: "deleteBoardForm",
  initialState,
  reducers: {
    toggleDeleteBoardForm: (state) => {
      state.isDeleteBoardFormOpen = !state.isDeleteBoardFormOpen
    },
  },
})

export const { toggleDeleteBoardForm } = deleteBoardForm.actions

export default deleteBoardForm.reducer
