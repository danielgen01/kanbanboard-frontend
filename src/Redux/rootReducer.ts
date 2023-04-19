import { combineReducers } from "@reduxjs/toolkit"
import sidebarReducer from "./features/Sidebar/sidebarSlice"
import newBoardFormReducer from "./features/NewBoardForm/NewBoardFormSlice"
import newTaskFormReducer from "./features/NewTaskForm/NewTaskFormSlice"
import viewTaskFormReducer from "./features/ViewTaskForm/ViewTaskFormSlice"
import editTaskFormReducer from "./features/EditTaskForm/EditTaskFormSlice"
import editBoardFormReducer from "./features/EditBoardForm/EditBoardFormSlice"
import deleteBoardFormReducer from "./features/DeleteBoardForm/DeleteBoardFormSlice"
import deleteTaskFormReducer from "./features/DeletTaskForm/DeleteTaskFormSlice"
import todoSliceReducer from "./features/columns/Todo/TodoSlice"
import currentBoardReducer from "./features/currentBoard/currentBoardSlice"

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  newboardform: newBoardFormReducer,
  newTaskForm: newTaskFormReducer,
  viewTaskForm: viewTaskFormReducer,
  editTaskForm:editTaskFormReducer,
  editBoardForm:editBoardFormReducer,
  deleteBoardForm:deleteBoardFormReducer,
  deletetTaskForm:deleteTaskFormReducer,
  todoStates:todoSliceReducer,
  currentBoard:currentBoardReducer
  
 
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
