import { combineReducers } from "@reduxjs/toolkit"
import sidebarReducer from "./features/Sidebar/sidebarSlice"
import newBoardFormReducer from "./features/NewBoardForm/NewBoardFormSlice"
import newTaskFormReducer from "./features/NewTaskForm/NewTaskFormSlice"
import viewTaskFormReducer from "./features/ViewTaskForm/ViewTaskFormSlice"
import editTaskFormReducer from "./features/EditTaskForm/EditTaskFormSlice"
import editBoardFormReducer from "./features/EditBoardForm/EditBoardFormSlice"
import deleteBoardFormReducer from "./features/DeleteBoardForm/DeleteBoardFormSlice"
import deleteTaskFormReducer from "./features/DeletTaskForm/DeleteTaskFormSlice"
import currentBoardNameReducer from "./features/currentBoard/currentBoardSlice"
import dataReducer from "./features/Data/DataSlice"

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  newboardform: newBoardFormReducer,
  newTaskForm: newTaskFormReducer,
  viewTaskForm: viewTaskFormReducer,
  editTaskForm: editTaskFormReducer,
  editBoardForm: editBoardFormReducer,
  deleteBoardForm: deleteBoardFormReducer,
  deletetTaskForm: deleteTaskFormReducer,
  currentBoardName: currentBoardNameReducer,
  data: dataReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
