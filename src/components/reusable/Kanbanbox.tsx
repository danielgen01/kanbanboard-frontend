import React from "react"

import { RootState } from "../../Redux/rootReducer"
import { useAppDispatch, useAppSelector } from "../../Redux/store"
import { toggleViewTaskForm } from "../../Redux/features/ViewTaskForm/ViewTaskFormSlice"
import { setCurrentTask } from "../../Redux/features/currentTask/currentTaskSlice"

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

  const currentTask = useAppSelector((state: RootState) => state.currentTask)

  const handleToggleViewTaskForm = () => {
    dispatch(toggleViewTaskForm())
  }

  const currentBoardName = useAppSelector(
    (state: RootState) => state.currentBoardName.currentBoardName
  )

  const getKanbanboxData = (title: string) => {
    for (let i = 0; i < data.boards.length; i++) {
      const columns = data.boards[i].columns
      for (let j = 0; j < columns.length; j++) {
        const tasks = columns[j].tasks
        for (let k = 0; k < tasks.length; k++) {
          const task = tasks[k]
          if (task.title === title) {
            return {
              title: task.title,
              description: task.description,
              status: task.status,
              subtasks: task.subtasks,
            }
          }
        }
      }
    }
  }

  const changeCurrentTask = () => {
    const kanbanboxData = getKanbanboxData(title)
    if (kanbanboxData) {
      dispatch(
        setCurrentTask({
          title: kanbanboxData.title,
          description: kanbanboxData.description,
          status: kanbanboxData.status,
          subtasks: kanbanboxData.subtasks,
        })
      )
      handleToggleViewTaskForm()
    }
  }

  return (
    <div
      className="kanbanbox min-h-[5rem] xl:h-28 w-72  md:w-52
       xl:w-72 bg-white rounded-md flex flex-col items-start justify-center shadow-md gap-2 px-5
          dark:bg-dark-gray cursor-pointer"
      onClick={changeCurrentTask}
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
