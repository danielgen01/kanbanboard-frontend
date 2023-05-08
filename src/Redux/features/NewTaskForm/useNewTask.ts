import React, { useState, useRef, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store"
import { RootState } from "../../rootReducer"
import { toggleNewTaskForm } from "./NewTaskFormSlice"
import { addTask } from "../Data/DataSlice"

export const useNewTask = () => {
  const data = useAppSelector((state: RootState) => state.data)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [subtasks, setSubtasks] = useState<string[]>([])

  const descriptionRef: any = useRef(null)
  const titleRef: any = useRef(null)
  const selectRef: any = useRef(null)

  const dispatch = useAppDispatch()

  const isTaskFormOpen = useAppSelector(
    (state: RootState) => state.newTaskForm.isTaskFormOpen
  )

  const currentBoardName = useAppSelector(
    (state: RootState) => state.currentBoardName.currentBoardName
  )

  const currentBoard = data.boards.find(
    (board) => board.name === currentBoardName
  )

  const firstColumnName: any =
    currentBoard?.columns && currentBoard.columns.length > 0
      ? currentBoard.columns[0].name
      : null
  const [status, setStatus] = useState(firstColumnName)

  useEffect(() => {
    setStatus(firstColumnName)
  }, [currentBoard])

  const currentBoardIndex = data.boards.findIndex(
    (board) => board.name === currentBoardName
  )

  const matchingColumn = currentBoard?.columns.find(
    (column) => column.name === status
  )

  const matchingColumnIndex: number =
    currentBoard?.columns.findIndex((column) => column.name === status) ?? 0

  const columnNames = currentBoard?.columns.map((column) => column.name)

  function addNewSubTask() {
    setSubtasks([...subtasks, "Subtask"])
  }

  function removeSubTask(title: string) {
    const index = subtasks.findIndex((subtaskname) => subtaskname === title)
    if (index !== -1) {
      setSubtasks(subtasks.filter((_, i) => i !== index))
    }
  }

  function handleSubTaskNameChange(index: number, value: string) {
    setSubtasks((prevSubtasks) => {
      const newSubtasks = [...prevSubtasks]
      newSubtasks[index] = value
      return newSubtasks
    })
  }

  const handleAddTask = () => {
    if (title) {
      dispatch(
        addTask({
          boardIndex: currentBoardIndex,
          columnIndex: matchingColumnIndex,
          task: {
            title: title,
            description: description,
            status: status,
            subtasks: subtasks.map((subtaskTitle, index) => ({
              title: subtaskTitle,
              isCompleted: false,
              id: `${title}-${index}`,
            })),
          },
        })
      )

      handleToggleNewTaskForm()
      setSubtasks([])
      titleRef.current.value = ""
      descriptionRef.current.value = ""
    } else {
      return alert("Title is required")
    }
    setTitle("")
    setDescription("")
  }

  const handleToggleNewTaskForm = () => {
    dispatch(toggleNewTaskForm())
  }

  function updateTitle() {
    setTitle(titleRef.current.value)
  }

  function updateDescription() {
    setDescription(descriptionRef.current.value)
  }

  function updateStatus(value: string) {
    setStatus(value)
  }

  return {
    data,
    title,
    setTitle,
    description,
    setDescription,
    subtasks,
    setSubtasks,
    descriptionRef,
    titleRef,
    selectRef,
    isTaskFormOpen,
    currentBoardName,
    currentBoard,
    firstColumnName,
    currentBoardIndex,
    matchingColumn,
    matchingColumnIndex,
    columnNames,
    addNewSubTask,
    removeSubTask,
    handleSubTaskNameChange,
    handleAddTask,
    handleToggleNewTaskForm,
    updateTitle,
    updateDescription,
    updateStatus,
    status,
    setStatus,
  }
}
