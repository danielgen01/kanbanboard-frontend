import { createSlice } from "@reduxjs/toolkit"

interface editTaskFormState {
  isEditTaskFormOpen: boolean
}

const initialState: editTaskFormState = {
  isEditTaskFormOpen: false,
}

const editTaskForm = createSlice({
  name: "editTaskForm",
  initialState,
  reducers: {
    toggleEditTaskForm: (state) => {
      state.isEditTaskFormOpen = !state.isEditTaskFormOpen
    },
  },
})

export const { toggleEditTaskForm } = editTaskForm.actions

export default editTaskForm.reducer
