import { createSlice } from "@reduxjs/toolkit"



interface viewTaskFormState {
  isViewTaskFormOpen: boolean
}

const initialState: viewTaskFormState = {
  isViewTaskFormOpen: false,
}

const viewTaskForm = createSlice({
  name: "viewtaskform",
  initialState,
  reducers: {
    toggleViewTaskForm: (state) => {
      state.isViewTaskFormOpen = !state.isViewTaskFormOpen
    },
  },
})

export const { toggleViewTaskForm } = viewTaskForm.actions

export default viewTaskForm.reducer