import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store"
import { toggleAddBoardForm } from "./NewBoardFormSlice"
import { RootState } from "../../rootReducer"
import { addBoard } from "../Data/DataSlice"
import { setCurrentBoardName } from "../currentBoard/currentBoardSlice"

export const useAddBoard = (onBoardAdded: () => void) => {
  const data = useAppSelector((state: RootState) => state.data)
  const [boardTitle, setBoardTitle] = useState<string>("New Board")
  const [columnNames, setColumnNames] = useState<
    Array<{ id: number; name: string }>
  >([
    { id: Math.max(Math.random() * 6_000_000), name: "Todo" },
    { id: Math.max(Math.random() * 6_000_000), name: "Doing" },
    { id: Math.max(Math.random() * 6_000_000), name: "Done" },
  ])

  const currentBoardName = useAppSelector(
    (state: RootState) => state.currentBoardName.currentBoardName
  )

  function addNewColumn() {
    const newId =
      columnNames.length > 0 ? columnNames[columnNames.length - 1].id + 1 : 1
    setColumnNames([...columnNames, { id: newId, name: "" }])
  }

  function removeColumn(id: number) {
    setColumnNames(columnNames.filter((column) => column.id !== id))
  }

  const isBoardFormOpen = useAppSelector(
    (state: RootState) => state.newboardform.isBoardFormOpen
  )

  const dispatch = useAppDispatch()

  const handleToggleAddBoardForm = () => {
    dispatch(toggleAddBoardForm())
    setBoardTitle("New Board")
    setColumnNames([
      { id: 1, name: "Todo" },
      { id: 2, name: "Doing" },
      { id: 3, name: "Done" },
    ])
  }

  const addNewBoard = () => {
    let columns = columnNames.map((column) => ({
      name: column.name,
      tasks: [],
      id: column.id,
    }))
    const boardExists = data.boards.find((board) => board.name === boardTitle)
    if (boardExists) {
      alert("Board with the same name already exists")
      return
    }

    dispatch(
      addBoard({
        name: boardTitle,
        columns: columns,
      })
    )

    handleToggleAddBoardForm()

    dispatch(setCurrentBoardName(boardTitle))

    setBoardTitle("New Board")
    setColumnNames([
      { id: 1, name: "Todo" },
      { id: 2, name: "Doing" },
      { id: 3, name: "Done" },
    ])
    onBoardAdded()
  }

  function handleColumnNameChange(id: number, value: string) {
    setColumnNames((prevColumnNames) => {
      const newColumnNames = prevColumnNames.map((column) =>
        column.id === id ? { ...column, name: value } : column
      )
      return newColumnNames
    })
  }

  return {
    data,
    boardTitle,
    setBoardTitle,
    columnNames,
    setColumnNames,
    currentBoardName,
    addNewColumn,
    removeColumn,
    isBoardFormOpen,
    handleToggleAddBoardForm,
    addNewBoard,
    handleColumnNameChange,
  }
}
