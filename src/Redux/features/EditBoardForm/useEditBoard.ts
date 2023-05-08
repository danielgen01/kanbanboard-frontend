import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store"
import { RootState } from "../../rootReducer"
import { toggleEditBoardForm } from "./EditBoardFormSlice"
import { Board } from "../Data/DataSlice"
import { updateBoard } from "../Data/DataSlice"
import { setCurrentBoardName } from "../currentBoard/currentBoardSlice"

export const useEditBoard = () => {
  const dispatch = useAppDispatch()

  const data = useAppSelector((state: RootState) => state.data)

  const isEditBoardFormOpen = useAppSelector(
    (state: RootState) => state.editBoardForm.isEditBoardFormOpen
  )

  const currentBoardName = useAppSelector(
    (state: RootState) => state.currentBoardName.currentBoardName
  )

  const currentBoard = data?.boards.find(
    (board: any) => board.name === currentBoardName
  )

  const [columnNames, setColumnNames] = useState<
    { id: number; name: string }[]
  >(
    currentBoard?.columns.map((column) => ({
      id: column.id,
      name: column.name,
    })) || []
  )

  function addNewColumn() {
    const newId =
      columnNames.length > 0
        ? Math.max(...columnNames.map((col) => col.id)) + 1
        : 0
    setColumnNames([...columnNames, { id: newId, name: "" }])
  }

  function removeColumn(id: number) {
    setColumnNames(columnNames.filter((column) => column.id !== id))
  }

  const [boardName, setBoardName] = useState(currentBoardName)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoardName(event.target.value)
  }

  const handleToggleEditBoardForm = () => {
    dispatch(toggleEditBoardForm())
  }

  function handleColumnNameChange(id: number, value: string) {
    setColumnNames((prevColumnNames) => {
      const newColumnNames = prevColumnNames.map((column) =>
        column.id === id ? { ...column, name: value } : column
      )
      return newColumnNames
    })
  }

  const handleUpdateBoard = async () => {
    const updatedBoard: Board = {
      ...currentBoard,
      name: boardName,
      columns: columnNames.map((column) => {
        const oldColumn = currentBoard?.columns.find(
          (oldCol) => oldCol.name === column.name
        )
        const updatedTasks = oldColumn
          ? oldColumn.tasks.map((task) => ({
              ...task,
              status: column.name,
            }))
          : []
        return {
          name: column.name,
          tasks: updatedTasks,
          id: column.id,
        }
      }),
    }

    const currentBoardIndex = data.boards.findIndex(
      (board: Board) => board.name === currentBoardName
    )

    await dispatch(
      updateBoard({
        boardIndex: currentBoardIndex,
        updatedBoard: updatedBoard,
      })
    )

    dispatch(setCurrentBoardName(boardName))

    handleToggleEditBoardForm()
  }

  return {
    data,
    isEditBoardFormOpen,
    currentBoardName,
    columnNames,
    addNewColumn,
    removeColumn,
    boardName,
    setBoardName,
    handleInputChange,
    handleToggleEditBoardForm,
    handleColumnNameChange,
    handleUpdateBoard,
    
  }
}
