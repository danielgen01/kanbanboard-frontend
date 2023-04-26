import React from "react"

import { RootState } from "../../Redux/rootReducer"
import { useAppDispatch, useAppSelector } from "../../Redux/store"
import { toggleViewTaskForm } from "../../Redux/features/ViewTaskForm/ViewTaskFormSlice"
import { setActiveTask, Board } from "../../Redux/features/Data/DataSlice"

type Subtask = {
  title: string
  isCompleted: boolean
}

type Task = {
  id: any
  title: string
  description: string
  subtasks: Subtask[]
  subtasksCount: number
}

export const Kanbanbox: React.FC<Task> = ({
  title,
  subtasksCount,
  id,
  description,
  subtasks: Subtask,
}) => {
  const dispatch = useAppDispatch()

  const data = useAppSelector((state: RootState) => state.data)

  const handleToggleViewTaskForm = () => {
    dispatch(toggleViewTaskForm())
  }

  const currentBoardName = useAppSelector(
    (state: RootState) => state.currentBoardName.currentBoardName
  )

  const currentTask = useAppSelector(
    (state: RootState) => state.data.activeTask
  )

  const getKanbanboxData = (title: string, boards: Board[]) => {
    for (let i = 0; i < boards.length; i++) {
      const columns = boards[i].columns
      for (let j = 0; j < columns.length; j++) {
        const tasks = columns[j].tasks
        for (let k = 0; k < tasks.length; k++) {
          const task = tasks[k]
          if (task.title === title) {
            return {
              boardIndex: i,
              columnIndex: j,
              taskIndex: k,
              title: task.title,
              description: task.description,
              status: task.status,
              subtasks: task.subtasks,
            }
          }
        }
      }
    }
    return null
  }

  const changeCurrentTask = () => {
    const kanbanboxData = getKanbanboxData(title, data.boards)
    if (kanbanboxData) {
      dispatch(setActiveTask(kanbanboxData))
      handleToggleViewTaskForm()
    }
  }

  console.log(currentTask)

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
