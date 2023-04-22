import React from "react"

import { RootState } from "../../Redux/rootReducer"
import { useAppDispatch, useAppSelector } from "../../Redux/store"
import { toggleViewTaskForm } from "../../Redux/features/ViewTaskForm/ViewTaskFormSlice"
import { setCurrentTaskTitle } from "../../Redux/features/currentTaskTitle/currentTaskTitleSlice"

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

  const data = useAppSelector((state: RootState) => state.data)


  const currentTaskTitle = useAppSelector(
    (state: RootState) => state.currentTaskTitle.currentTaskTitle
  )



  const handleToggleViewTaskForm = () => {
    dispatch(toggleViewTaskForm())
  }

  const changeCurrentTaskTitle = (title: string) => {
    dispatch(setCurrentTaskTitle(title))
    handleToggleViewTaskForm()
    console.log(currentTaskTitle)
  }

  return (
    <div
      className="kanbanbox min-h-[5rem] xl:h-28 w-72  md:w-52
       xl:w-72 bg-white rounded-md flex flex-col items-start justify-center shadow-md gap-2 px-5
          dark:bg-dark-gray cursor-pointer"
      // onClick={handleToggleViewTaskForm}
      onClick={() => changeCurrentTaskTitle(title)}
    >
      <h1
        className="text-black font-bold text-md 
            dark:text-white"
      >
        {title}
      </h1>
      <p className="text-medium-gray font-bold text-sm">
        0 of {subtasksCount} subtasks
      </p>
    </div>
  )
}
