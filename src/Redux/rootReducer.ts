import { combineReducers } from "@reduxjs/toolkit"
import sidebarReducer from "./features/Sidebar/sidebarSlice"
import newBoardFormReducer from "./features/NewBoardForm/NewBoardFormSlice"
import newTaskFormReducer from "./features/NewTaskForm/NewTaskFormSlice"
import viewTaskFormReducer from "./features/ViewTaskForm/ViewTaskFormSlice"
import editTaskFormReducer from "./features/EditTaskForm/EditTaskFormSlice"

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  newboardform: newBoardFormReducer,
  newTaskForm: newTaskFormReducer,
  viewTaskForm: viewTaskFormReducer,
  editTaskForm:editTaskFormReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
