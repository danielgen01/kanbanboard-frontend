import React from "react"

import { RootState } from "../../Redux/rootReducer"
import { useAppDispatch, useAppSelector } from "../../Redux/store"
import { toggleViewTaskForm } from "../../Redux/features/ViewTaskForm/ViewTaskFormSlice"

type props = {
  title: string
  subtasksCount: number
}

export const Kanbanbox: React.FC<props> = ({ title, subtasksCount }) => {
  const isViewTaskFormOpen = useAppSelector(
    (state: RootState) => state.viewTaskForm.isViewTaskFormOpen
  )

  const dispatch = useAppDispatch()

  const handleToggleViewTaskForm = () => {
    dispatch(toggleViewTaskForm())
  }

  return (
    <div
      className="kanbanbox h-28 w-72 md:w-[95%] bg-white rounded-md flex flex-col items-start justify-center shadow-md gap-2 px-5
          dark:bg-dark-gray"
      onClick={handleToggleViewTaskForm}
    >
      <h1
        className="text-black font-bold text-xl 
            dark:text-white"
      >
        {title}
      </h1>
      <p className="text-medium-gray font-bold">
        0 of {subtasksCount} subtasks
      </p>
    </div>
  )
}
