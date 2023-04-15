import { createSlice } from "@reduxjs/toolkit"

interface editBoardFormState {
  isEditBoardFormOpen: boolean
}

const initialState: editBoardFormState = {
  isEditBoardFormOpen: false,
}

const editBoardForm = createSlice({
  name: "editBoardForm",
  initialState,
  reducers: {
    toggleEditBoardForm: (state) => {
      state.isEditBoardFormOpen = !state.isEditBoardFormOpen
    },
  },
})

export const { toggleEditBoardForm } = editBoardForm.actions

export default editBoardForm.reducer
