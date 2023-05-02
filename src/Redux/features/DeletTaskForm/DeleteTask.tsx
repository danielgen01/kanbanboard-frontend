import React from "react"

import { RootState } from "../../rootReducer"
import { toggleDeleteTaskForm } from "./DeleteTaskFormSlice"
import { useAppDispatch, useAppSelector } from "../../store"
import { removeTask } from "../Data/DataSlice"
import { toggleViewTaskForm } from "../ViewTaskForm/ViewTaskFormSlice"

const DeleteTask: React.FC = () => {
  const dispatch = useAppDispatch()

  const isDeleteTaskFormOpen = useAppSelector(
    (state: RootState) => state.deletetTaskForm.isDeleteTaskFormOpen
  )

  const handleToggleDeleteTaskForm = () => {
    dispatch(toggleDeleteTaskForm())
  }

  const data = useAppSelector((state: RootState) => state.data)

  const currentBoardName = useAppSelector(
    (state: RootState) => state.currentBoardName.currentBoardName
  )

  const currentTask = useAppSelector((state: RootState) => state.data.activeTask)

  const currentTaskTitle = currentTask ? currentTask.title || "" : ""

  const currentBoard = data?.boards.find(
    (board: any) => board.name === currentBoardName
  )

  const getColumnIndexByStatus = (status: string): number | undefined => {
    const columnIndex = currentBoard?.columns.findIndex(
      (col: any) => col.name.toLowerCase() === status.toLowerCase()
    )

    return columnIndex !== undefined ? columnIndex : undefined
  }

  const removeCurrentTask = () => {
    const columnIndex = getColumnIndexByStatus(currentTask.status)
    const taskIndex = currentBoard?.columns[columnIndex!].tasks.findIndex(
      (task: any) => task.title === currentTaskTitle
    )

    if (currentBoard && columnIndex !== undefined && taskIndex !== undefined) {
      dispatch(
        removeTask({
          boardIndex: data.boards.indexOf(currentBoard),
          columnIndex,
          taskIndex,
        })
      )
    }
    handleToggleDeleteTaskForm()
    dispatch(toggleViewTaskForm())
  }

  return (
    <>
      <section
        className="transparent-background bg-black/50 fixed top-0 left-0 h-screen w-screen"
        onClick={handleToggleDeleteTaskForm}
        style={{ display: isDeleteTaskFormOpen ? "block" : "none" }}
      >
        {" "}
      </section>
      <div
        className="delete-box px-5 min-h-[250px] bg-white 
       dark:bg-dark-gray w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md"
        style={{ display: isDeleteTaskFormOpen ? "block" : "none" }}
      >
        <div className="content py-5 px-5 flex flex-col gap-5">
          <h1
            className="text-lg text-dark-red font-bold"
            role="heading"
            // aria-level="1"
          >
            Delete this task?
          </h1>
          <p className="text-medium-gray leading-6 font-bold text-sm">
            Are you sure you want to delete the <span className="font-bold uppercase ">"{currentTask.title}"</span> task and its subtasks?
            This action cannot be reversed.
          </p>
          <div className="button flex flex-col gap-3 lg:grid lg:grid-cols-2">
            <button
              className="bg-dark-red text-white font-bold py-2 px-4 rounded-3xl hover:bg-bright-red duration-100"
              type="button"
              onClick={removeCurrentTask}
            >
              Delete
            </button>
            <button
              className=" bg-bright-gray dark:bg-white text-dark-purple font-bold py-2 px-4 rounded-3xl dark:hover:bg-white"
              type="button"
              onClick={handleToggleDeleteTaskForm}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteTask
