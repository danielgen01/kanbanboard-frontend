import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CurrentTask {
  title: string
  description: string
  status: string
  subtasks: any[]
}

const initialState: CurrentTask = {
  title: "",
  description: "",
  status: "",
  subtasks: [],
}

const currentTaskSlice = createSlice({
  name: "currentTask",
  initialState,
  reducers: {
    setCurrentTask: (state, action: PayloadAction<CurrentTask>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { setCurrentTask } = currentTaskSlice.actions

export default currentTaskSlice.reducer
