import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import data from "../../../../data.json"
import { Subtask } from "../../../components/reusable/Subtask"

export type Board = {
  name: string
  columns: Column[]
}

type Column = {
  name: string
  tasks: Task[]
}

export type Task = {
  title: string
  description: string
  status: string
  subtasks: Subtask[]
}

export type Subtask = {
  title: string
  isCompleted: boolean
}

type State = {
  boards: Board[],
  activeTask: {
    boardIndex: number,
    columnIndex: number,
    taskIndex: number,
    title:string,
    description: string,
    subtasks: Subtask[]
    status: string
  } 
}


const initialState: State = {
  boards: data.boards,
  activeTask: {
    boardIndex: 0,
    columnIndex: 0,
    taskIndex: 0,
    title:"",
    description: "",
    subtasks: [],
    status: ""
  }
}

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addBoard: (state, action: PayloadAction<Board>) => {
      state.boards.push(action.payload)
    },
    addTask: (
      state,
      action: PayloadAction<{
        boardIndex: number
        columnIndex: number
        task: Task
      }>
    ) => {
      const { boardIndex, columnIndex, task } = action.payload
      state.boards[boardIndex].columns[columnIndex].tasks.push(task)
    },
    removeBoard: (state, action: PayloadAction<string>) => {
      const boardNameToRemove = action.payload
      state.boards = state.boards.filter(
        (board) => board.name !== boardNameToRemove
      )
    },
    removeTask: (
      state,
      action: PayloadAction<{
        boardIndex: number
        columnIndex: number
        taskIndex: number
      }>
    ) => {
      const { boardIndex, columnIndex, taskIndex } = action.payload
      state.boards[boardIndex].columns[columnIndex].tasks.splice(taskIndex, 1)
    },
    updateTask: (
      state,
      action: PayloadAction<{
        boardIndex: number
        columnIndex: number
        taskIndex: number
        updatedTask: Task
      }>
    ) => {
      const { boardIndex, columnIndex, taskIndex, updatedTask } = action.payload
      state.boards[boardIndex].columns[columnIndex].tasks[taskIndex] =
        updatedTask
    },
    updateBoard: (
      state,
      action: PayloadAction<{
        boardIndex: number
        updatedBoard: Board
      }>
    ) => {
      const { boardIndex, updatedBoard } = action.payload
      state.boards[boardIndex] = updatedBoard
    },
    setActiveTask: (
      state,
      action: PayloadAction<{
        boardIndex: number,
        columnIndex: number,
        taskIndex: number,
        title: string,
        description: string,
        subtasks: Subtask[],
        status: string
      }>
    ) => {
      const {
        boardIndex,
        columnIndex,
        taskIndex,
        title,
        description,
        subtasks,
        status,
      } = action.payload
      state.activeTask = {
        boardIndex,
        columnIndex,
        taskIndex,
        title,
        description,
        subtasks,
        status,
      }
    },
    

  },
})

export const { addBoard, addTask, removeBoard, removeTask, updateTask,setActiveTask } =
  dataSlice.actions

export default dataSlice.reducer
