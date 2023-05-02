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
      className="subtask flex items-center gap-2 w-full bg-bright-gray min-h-[50px] rounded-md px-3 hover:bg-bright-purple dark:bg-dark-black cursor-pointer dark:hover:bg-bright-purple duration-100"
      onClick={handleCheckboxChange}
    >
      <input
        type="checkbox"
        name="check-task"
        id="check-task"
        className={`w-6 h-6 border border-gray-300 rounded-sm bg-white ${
          currentSubtask?.isCompleted ? "bg-dark-purple" : ""
        } focus:outline-none opacity-0 absolute`}
        checked={currentSubtask?.isCompleted}
      />
      <div
        className={`w-6 h-6 border border-gray-300 rounded-sm ${
          currentSubtask?.isCompleted ? "bg-dark-purple" : "dark:bg-dark-gray bg-white"
        } flex items-center justify-center outline-none border-none`}
      >
        {currentSubtask?.isCompleted && (
          <svg
            className="w-6 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
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
  );
};