import React, { useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store"
import { RootState } from "../../rootReducer"
import { toggleEditTaskForm } from "./EditTaskFormSlice"
import { v4 as uuidv4 } from "uuid"
import { updateTask } from "../Data/DataSlice"
import { Task } from "../Data/DataSlice"
import { Subtask } from "../Data/DataSlice"

export const useEditTask = () => {
  const dispatch = useAppDispatch()

  const data = useAppSelector((state: RootState) => state.data)

  const isEditTaskFormOpen = useAppSelector(
    (state: RootState) => state.editTaskForm.isEditTaskFormOpen
  )

  const currentTask = useAppSelector(
    (state: RootState) => state.data.activeTask
  )
  const currentTaskDescription = useAppSelector(
    (state: RootState) => state.data.activeTask?.description
  )
  const currentTaskTitle = useAppSelector(
    (state: RootState) => state.data.activeTask?.title
  )
  const currentSubtasks = useAppSelector(
    (state: RootState) => state.data.activeTask?.subtasks
  )

  const currentBoardName = useAppSelector(
    (state: RootState) => state.currentBoardName.currentBoardName
  )

  const currentBoard = data?.boards.find(
    (board: any) => board.name === currentBoardName
  )

  const handleToggleEditTaskForm = () => {
    dispatch(toggleEditTaskForm())
  }

  const [title, setTitle] = useState<string>(currentTask.title)
  const [description, setDescription] = useState<string>(
    currentTask.description
  )
  const [subtasks, setSubtasks] = useState<Subtask[]>(currentSubtasks)

  const descriptionRef: any = useRef(null)
  const titleRef: any = useRef(null)

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value)
  }

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value)
  }

  function addNewSubTask() {
    setSubtasks([
      ...subtasks,
      {
        id: uuidv4(),
        title: "",
        isCompleted: false,
      },
    ])
  }

  function removeSubTask(subtaskToRemove: {
    id: string
    title: string
    isCompleted: boolean
  }) {
    console.log("Removing subtask: ", subtaskToRemove)
    setSubtasks(subtasks.filter((subtask) => subtask.id !== subtaskToRemove.id))
  }

  function updateSubTaskTitle(id: string, newTitle: string) {
    setSubtasks((prevSubtasks) =>
      prevSubtasks.map((subtask) =>
        subtask.id === id ? { ...subtask, title: newTitle } : subtask
      )
    )
  }

  const activeTaskData = useAppSelector((state: RootState) => {
    const { boards, activeTask } = state.data
    const { boardIndex, columnIndex, taskIndex } = activeTask

    let currentTaskData

    for (const board of boards) {
      for (const column of board.columns) {
        for (const task of column.tasks) {
          if (
            task.title === activeTask.title &&
            task.description === activeTask.description
          ) {
            currentTaskData = task
            break
          }
        }
      }
    }
    return currentTaskData
  })

  const handleUpdateTask = async () => {
    const updatedTask: Task = {
      ...currentTask,
      title: title,
      description: description,
      status: currentTask.status,
      subtasks: subtasks, // should save the new subtasks data!!!!
    }

    await dispatch(
      updateTask({
        boardIndex: currentTask.boardIndex,
        columnIndex: currentTask.columnIndex,
        taskIndex: currentTask.taskIndex,
        updatedTask,
      })
    )
    handleToggleEditTaskForm()
  }

  return {
    data,
    isEditTaskFormOpen,
    currentTask,
    currentTaskDescription,
    currentTaskTitle,
    currentSubtasks,
    currentBoardName,
    currentBoard,
    handleToggleEditTaskForm,
    title,
    setTitle,
    description,
    setDescription,
    subtasks, 
    setSubtasks,
    descriptionRef,
    titleRef,
    handleTitleChange,
    addNewSubTask,
    handleDescriptionChange,
    removeSubTask,
    updateSubTaskTitle,
    handleUpdateTask,
    activeTaskData
  }
}
