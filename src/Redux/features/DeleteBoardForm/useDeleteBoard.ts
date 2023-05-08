import React from "react"
import { useAppDispatch, useAppSelector } from "../../store"
import { RootState } from "../../rootReducer"
import { removeBoard } from "../Data/DataSlice"
import { toggleDeleteBoardForm } from "./DeleteBoardFormSlice"

export const useDeleteBoard = () => {
  const data = useAppSelector((state: RootState) => state.data)
  const dispatch = useAppDispatch()

  const isDeleteBoardFormOpen = useAppSelector(
    (state: RootState) => state.deleteBoardForm.isDeleteBoardFormOpen
  )

  const currentBoardName = useAppSelector(
    (state: RootState) => state.currentBoardName.currentBoardName
  )

  const deleteCurrentBoard = () => {
    dispatch(removeBoard(currentBoardName))

    handleToggleDeleteBoardForm()
  }

  const handleToggleDeleteBoardForm = () => {
    dispatch(toggleDeleteBoardForm())
  }


  return {
    data,
    isDeleteBoardFormOpen,
    currentBoardName,
    deleteCurrentBoard,
    handleToggleDeleteBoardForm
  }
}
