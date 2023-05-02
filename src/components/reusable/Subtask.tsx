import React, { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../Redux/store"
import { RootState } from "../../Redux/rootReducer"
import { updateTask, Task } from "../../Redux/features/Data/DataSlice"
import { toggleViewTaskForm } from "../../Redux/features/ViewTaskForm/ViewTaskFormSlice"
type props = {
  title: string
}

export const Subtask: React.FC<props> = ({ title }) => {
  const dispatch = useAppDispatch()

  const data = useAppSelector((state: RootState) => state.data)

  const currentBoardName = useAppSelector(
    (state: RootState) => state.currentBoardName.currentBoardName
  )

  const currentTask = useAppSelector(
    (state: RootState) => state.data.activeTask
  )

  const currentTaskTitle = currentTask.title

  const currentBoard = data?.boards.find(
    (board: any) => board.name === currentBoardName
  )

  const currentSubtask = currentTask?.subtasks.find(
    (subtask: any) => subtask.title === title
  )

  const handleCheckboxChange = () => {
    const newSubtasks = currentTask?.subtasks.map((subtask: any) => {
      if (subtask.title === title) {
        return {
          ...subtask,
          isCompleted: !subtask.isCompleted,
        }
      }
      return subtask
    })

    const updatedTask: Task = {
      ...currentTask,
      subtasks: newSubtasks,
    }

    dispatch(
      updateTask({
        boardIndex: currentTask.boardIndex,
        columnIndex: currentTask.columnIndex,
        taskIndex: currentTask.taskIndex,
        updatedTask,
      })
    )
    dispatch(toggleViewTaskForm())
  }

  return (
    <div
      className="subtask flex items-center gap-2 w-full bg-bright-gray min-h-[50px] rounded-md px-3
       hover:bg-bright-purple dark:bg-dark-black cursor-pointer dark:hover:bg-bright-purple duration-100"
      onClick={handleCheckboxChange}
    >
      <input
        type="checkbox"
        name="check-task"
        id="check-task"
        className={`w-6 h-6 border border-gray-300 rounded-sm bg-white ${
          currentSubtask?.isCompleted ? "bg-dark-purple" : ""
        } focus:outline-none`}
        checked={currentSubtask?.isCompleted}
      />
      <span
        className={`text-sm font-bold ${
          currentSubtask?.isCompleted
            ? "line-through text-medium-gray dark:text-medium-gray"
            : "dark:text-white"
        }`}
      >
        {title}
      </span>
    </div>
  )
}
