import { combineReducers } from "@reduxjs/toolkit"
import sidebarReducer from "./features/Sidebar/sidebarSlice"
import newBoardFormReducer from "./features/NewBoardForm/NewBoardFormSlice"
import newTaskFormReducer from "./features/NewTaskForm/NewTaskFormSlice"

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  newboardform: newBoardFormReducer,
  newTaskForm: newTaskFormReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
