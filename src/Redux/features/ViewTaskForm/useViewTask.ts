import React, { useState, useEffect } from "react"
import { RootState } from "../../rootReducer"
import { useAppDispatch, useAppSelector } from "../../store"
import { toggleViewTaskForm } from "./ViewTaskFormSlice"
import { toggleEditTaskForm } from "../EditTaskForm/EditTaskFormSlice"
import { toggleDeleteTaskForm } from "../DeletTaskForm/DeleteTaskFormSlice"
import { updateTask, Task, removeTask, addTask } from "../Data/DataSlice"

export const useViewTask = () => {
  const handleToggleViewTaskForm = () => {
    dispatch(toggleViewTaskForm())
    setIsEllipsDropDownOpen(false)
  }

  const handleToggleEditTaskForm = () => {
    dispatch(toggleEditTaskForm())
    handleToggleViewTaskForm()
    setIsEllipsDropDownOpen(false)
  }

  const toggleEllipsDropDown = () => {
    setIsEllipsDropDownOpen(!isEllipsDropDownOpen)
  }

  const handleToggleDeleteTaskForm = () => {
    dispatch(toggleDeleteTaskForm())
    setIsEllipsDropDownOpen(false)
  }

  const [isEllipsDropDownOpen, setIsEllipsDropDownOpen] =
    useState<boolean>(false)
  const isViewTaskFormOpen = useAppSelector(
    (state: RootState) => state.viewTaskForm.isViewTaskFormOpen
  )

  const dispatch = useAppDispatch()

  const data = useAppSelector((state: RootState) => state.data)

  const currentBoardName = useAppSelector(
    (state: RootState) => state.currentBoardName.currentBoardName
  )

  const currentBoard = data?.boards.find(
    (board: any) => board.name === currentBoardName
  )

  const currentTask = useAppSelector(
    (state: RootState) => state.data.activeTask
  )

  const currentTaskDescription = currentTask
    ? currentTask.description || ""
    : ""
  const currentTaskTitle = currentTask ? currentTask.title || "" : ""

  const completedSubtasks = currentTask.subtasks.filter(
    (subtask: any) => subtask.isCompleted
  )

  console.log(completedSubtasks)

  const [completedSubtasksLength, setCompletedSubtasksLength] = useState(
    completedSubtasks.length
  )

  useEffect(() => {
    setCompletedSubtasksLength(completedSubtasks.length)
  }, [completedSubtasks])

  let boardIndex = -1
  let columnIndex = -1
  let taskIndex = -1

  const { boards } = useAppSelector((state: RootState) => state.data)

  for (let i = 0; i < boards.length; i++) {
    const columns = boards[i].columns
    for (let j = 0; j < columns.length; j++) {
      const tasks = columns[j].tasks
      for (let k = 0; k < tasks.length; k++) {
        if (tasks[k].title === currentTask.title) {
          boardIndex = i
          columnIndex = j
          taskIndex = k
          break
        }
      }
    }
  }

  const updateStatus = (value: string) => {
    const updatedTask: Task = {
      ...currentTask,
      status: value,
    }

    const newColumnIndex: any = currentBoard?.columns.findIndex(
      (column: any) => column.name === value
    )

    dispatch(
      removeTask({
        boardIndex: boardIndex,
        columnIndex: columnIndex,
        taskIndex: taskIndex,
      })
    )

    dispatch(
      addTask({
        boardIndex: boardIndex,
        columnIndex: newColumnIndex,
        task: updatedTask,
      })
    )

    handleToggleViewTaskForm()
  }
  return {
    handleToggleViewTaskForm,
    handleToggleEditTaskForm,
    toggleEllipsDropDown,
    handleToggleDeleteTaskForm,
    isEllipsDropDownOpen,
    setIsEllipsDropDownOpen,
    isViewTaskFormOpen,
    data,
    currentBoard,
    currentBoardName,
    currentTask,
    currentTaskDescription,
    currentTaskTitle,
    completedSubtasks,
    completedSubtasksLength,
    setCompletedSubtasksLength,
    boards,
    updateStatus,
  }
}
