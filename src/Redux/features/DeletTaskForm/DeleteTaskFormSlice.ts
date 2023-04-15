import { createSlice } from "@reduxjs/toolkit"

interface deleteTaskFormState {
  isDeleteTaskFormOpen: boolean
}

const initialState: deleteTaskFormState = {
  isDeleteTaskFormOpen: false,
}

const deleteTaskForm = createSlice({
  name: "deleteTaskForm",
  initialState,
  reducers: {
    toggleDeleteTaskForm: (state) => {
      state.isDeleteTaskFormOpen = !state.isDeleteTaskFormOpen
    },
  },
})

export const { toggleDeleteTaskForm } = deleteTaskForm.actions

export default deleteTaskForm.reducer
