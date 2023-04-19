import React from "react"

import { RootState } from "../../Redux/rootReducer"
import { useAppDispatch, useAppSelector } from "../../Redux/store"
import { toggleViewTaskForm } from "../../Redux/features/ViewTaskForm/ViewTaskFormSlice"

interface Subtask {
  id: string
  title: string
  completed: boolean
}

type TodoBox = {
  id: any
  title: string
  description: string
  subtasks: Subtask[]
  subtasksCount: number
}

export const Kanbanbox: React.FC<TodoBox> = ({
  title,
  subtasksCount,
  id,
  description,
  subtasks: Subtask,
}) => {
  const dispatch = useAppDispatch()

  const handleToggleViewTaskForm = () => {
    dispatch(toggleViewTaskForm())
  }

  return (
    <div
      className="kanbanbox min-h-28 xl:h-28 w-72 md:w-[90%]  xl:w-[70%] bg-white rounded-md flex flex-col items-start justify-center shadow-md gap-2 px-5
          dark:bg-dark-gray cursor-pointer"
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
