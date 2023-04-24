import React from "react"

import { RootState } from "../../rootReducer"
import { toggleDeleteTaskForm } from "./DeleteTaskFormSlice"
import { useAppDispatch, useAppSelector } from "../../store"

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

  const currentTaskTitle = useAppSelector(
    (state: RootState) => state.currentTask.currentTask
  )

  const currentBoard = data?.boards.find(
    (board: any) => board.name === currentBoardName
  )

  let currentTask = null

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

  const deleteCurrentTask = () => {
    if (currentBoard) {
      for (const column of currentBoard.columns) {
        const index = column.tasks.findIndex(
          (task: any) => task.title === currentTaskTitle
        )
        if (index !== -1) {
          column.tasks.splice(index, 1)
          break
        }
      }
    }
  }

  return (
    <>
      <section
        className="transparent-background bg-black/50 absolute top-0 left-0 h-screen w-screen"
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
            Are you sure you want to delete the tasktitle task and its subtasks?
            This action cannot be reversed.
          </p>
          <div className="button flex flex-col gap-3 lg:grid lg:grid-cols-2">
            <button
              className="bg-dark-red text-white font-bold py-2 px-4 rounded-3xl hover:bg-bright-red duration-100"
              type="button"
              onClick={deleteCurrentTask}
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
