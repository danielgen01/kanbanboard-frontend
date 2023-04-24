import React, { useState } from "react"
import { useAppSelector } from "../../Redux/store"
import { RootState } from "../../Redux/rootReducer"

type props = {
  title: string
  completedSubtasks: number
  setCompletedSubtasks: any
}

export const Subtask: React.FC<props> = ({
  title,
  completedSubtasks,
  setCompletedSubtasks,
}) => {
  const [isChecked, setIsChecked] = useState(false)

  const data = useAppSelector((state: RootState) => state.data)

  const currentBoardName = useAppSelector(
    (state: RootState) => state.currentBoardName.currentBoardName
  )

  const currentTaskTitle = useAppSelector(
    (state: RootState) => state.currentTask.currentTask
  )

  const currentBoard = data?.boards.find(
    (board: any) => board.name === currentBoardName
  )

  let currentTask: any = null

  if (currentBoard) {
    for (const column of currentBoard.columns) {
      currentTask = column.tasks.find(
        (task: any) => task.title === currentTaskTitle
      )
      if (currentTask) {
        break
      }
    }
  }

  const handleCheckboxChange = () => {
    if (!isChecked) {
      setCompletedSubtasks(completedSubtasks + 1)
    } else {
      setCompletedSubtasks(completedSubtasks - 1)
    }

    const newSubtasks = currentTask?.subtasks.map((subtask: any) => {
      if (subtask.title === title) {
        return {
          ...subtask,
          isCompleted: !isChecked,
        }
      }
      return subtask
    })

    setIsChecked(!isChecked)
    // currentTask.subtasks = newSubtasks
  }

  return (
    <div
      className="subtask flex items-center gap-2 w-full bg-bright-gray min-h-[50px] rounded-md px-3 hover:bg-bright-purple>
    dark:bg-dark-black cursor-pointer"
      onClick={handleCheckboxChange}
    >
      <input
        type="checkbox"
        name="check-task"
        id="check-task"
        className={`w-6 h-6 border border-gray-300 rounded-sm bg-white 
        ${`
          isChecked ? "bg-dark-purple : ""
        `}  focus:outline-none`}
        checked={isChecked}
      />
      <span
        className={`text-sm font-bold ${isChecked ? "line-through" : ""}
          ${isChecked ? "dark:text-medium-gray" : ""}
         dark:text-white`}
      >
        {title}
      </span>
    </div>
  )
}
