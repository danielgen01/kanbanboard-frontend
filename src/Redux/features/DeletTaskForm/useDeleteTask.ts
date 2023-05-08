import React from "react"
import { useAppDispatch, useAppSelector } from "../../store"
import { RootState } from "../../rootReducer"
import { toggleDeleteTaskForm } from "./DeleteTaskFormSlice"
import { toggleViewTaskForm } from "../ViewTaskForm/ViewTaskFormSlice"
import { removeTask } from "../Data/DataSlice"

export const useDeleteTask = () => {
  const dispatch = useAppDispatch()

  const isDeleteTaskFormOpen = useAppSelector(
    (state: RootState) => state.deletetTaskForm.isDeleteTaskFormOpen
  )

  const handleToggleDeleteTaskForm = () => {
    dispatch(toggleDeleteTaskForm())
  }

  const data = useAppSelector((state: RootState) => state.data)

  const currentBoardName = useAppSelector(
    (state: RootState) => state.currentBoardName.currentBoardName
  )

  const currentTask = useAppSelector(
    (state: RootState) => state.data.activeTask
  )

  const currentTaskTitle = currentTask ? currentTask.title || "" : ""

  const currentBoard = data?.boards.find(
    (board: any) => board.name === currentBoardName
  )

  const getColumnIndexByStatus = (status: string): number | undefined => {
    const columnIndex = currentBoard?.columns.findIndex(
      (col: any) => col.name.toLowerCase() === status.toLowerCase()
    )

    return columnIndex !== undefined ? columnIndex : undefined
  }

  const removeCurrentTask = () => {
    const columnIndex = getColumnIndexByStatus(currentTask.status)
    const taskIndex = currentBoard?.columns[columnIndex!].tasks.findIndex(
      (task: any) => task.title === currentTaskTitle
    )

    if (currentBoard && columnIndex !== undefined && taskIndex !== undefined) {
      dispatch(
        removeTask({
          boardIndex: data.boards.indexOf(currentBoard),
          columnIndex,
          taskIndex,
        })
      )
    }
    handleToggleDeleteTaskForm()
    dispatch(toggleViewTaskForm())
  }

  return {
    currentBoard,
    currentBoardName,
    currentTask,
    currentTaskTitle,
    data,
    handleToggleDeleteTaskForm,
    isDeleteTaskFormOpen,
    getColumnIndexByStatus,
    removeCurrentTask
  }
}
