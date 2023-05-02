import React, { useState, useEffect } from "react"
import { Subtask } from "../../../components/reusable/Subtask"
import ellipsIcon from "../../../../assets/icon-vertical-ellipsis.svg"

import { RootState } from "../../rootReducer"
import { useAppDispatch, useAppSelector } from "../../store"
import { toggleViewTaskForm } from "./ViewTaskFormSlice"
import { toggleEditTaskForm } from "../EditTaskForm/EditTaskFormSlice"
import { toggleDeleteTaskForm } from "../DeletTaskForm/DeleteTaskFormSlice"
import { updateTask, Task, removeTask, addTask } from "../Data/DataSlice"
import { Listbox } from "@headlessui/react"
import chevronDown from "../../../../assets/icon-chevron-down.svg"

const ViewTaskForm = () => {
  const handleToggleViewTaskForm = () => {
    dispatch(toggleViewTaskForm())
    setIsEllipsDropDownOpen(false)
  }

  const handleToggleEditTaskForm = () => {
    dispatch(toggleEditTaskForm())
    handleToggleViewTaskForm()
    setIsEllipsDropDownOpen(false)
  }

  const toggleEllipsDropDown = () => {
    setIsEllipsDropDownOpen(!isEllipsDropDownOpen)
  }

  const handleToggleDeleteTaskForm = () => {
    dispatch(toggleDeleteTaskForm())
    setIsEllipsDropDownOpen(false)
  }

  const [isEllipsDropDownOpen, setIsEllipsDropDownOpen] =
    useState<boolean>(false)
  const isViewTaskFormOpen = useAppSelector(
    (state: RootState) => state.viewTaskForm.isViewTaskFormOpen
  )

  const dispatch = useAppDispatch()

  const data = useAppSelector((state: RootState) => state.data)

  const currentBoardName = useAppSelector(
    (state: RootState) => state.currentBoardName.currentBoardName
  )

  const currentBoard = data?.boards.find(
    (board: any) => board.name === currentBoardName
  )

  const currentTask = useAppSelector(
    (state: RootState) => state.data.activeTask
  )

  const currentTaskDescription = currentTask
    ? currentTask.description || ""
    : ""
  const currentTaskTitle = currentTask ? currentTask.title || "" : ""

  const completedSubtasks = currentTask.subtasks.filter(
    (subtask: any) => subtask.isCompleted
  )

  console.log(completedSubtasks)

  const [completedSubtasksLength, setCompletedSubtasksLength] = useState(
    completedSubtasks.length
  )

  useEffect(() => {
    setCompletedSubtasksLength(completedSubtasks.length)
  }, [completedSubtasks])

  let boardIndex = -1
  let columnIndex = -1
  let taskIndex = -1

  const { boards } = useAppSelector((state: RootState) => state.data)

  for (let i = 0; i < boards.length; i++) {
    const columns = boards[i].columns
    for (let j = 0; j < columns.length; j++) {
      const tasks = columns[j].tasks
      for (let k = 0; k < tasks.length; k++) {
        if (tasks[k].title === currentTask.title) {
          boardIndex = i
          columnIndex = j
          taskIndex = k
          break
        }
      }
    }
  }

  const updateStatus = (value: string) => {
    const updatedTask: Task = {
      ...currentTask,
      status: value,
    }

    const newColumnIndex: any = currentBoard?.columns.findIndex(
      (column: any) => column.name === value
    )

    dispatch(
      removeTask({
        boardIndex: boardIndex,
        columnIndex: columnIndex,
        taskIndex: taskIndex,
      })
    )

    dispatch(
      addTask({
        boardIndex: boardIndex,
        columnIndex: newColumnIndex,
        task: updatedTask,
      })
    )

    handleToggleViewTaskForm()
  }

  return (
    <>
      <section
        className="transparent-background absolute top-0 left-0 h-screen w-screen bg-black/60"
        style={{ display: isViewTaskFormOpen ? "block" : "none" }}
        onClick={handleToggleViewTaskForm}
      ></section>
      <form
        className="edit-task-container px-10 w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] min-h-[500px] bg-white dark:bg-dark-gray
       fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md"
        style={{ display: isViewTaskFormOpen ? "block" : "none" }}
      >
        <div className="container-content flex flex-col px-1 py-5 gap-6">
          <div className="headline-and-edit-task-icon flex items-center justify-between">
            <h1 className="text-black dark:text-white font-bold task-title">
              {currentTaskTitle}
            </h1>
            <img
              src={ellipsIcon}
              alt="ElipsIcon"
              onClick={toggleEllipsDropDown}
              className="px-5 py-5 cursor-pointer"
            />
          </div>

          <p className="text-medium-gray">{currentTaskDescription}</p>

          <section className="subtasks flex flex-col justify-center gap-2">
            <label
              htmlFor="check-task"
              className="text-medium-gray dark:text-white font-bold text-sm"
            >
              Subtasks ({completedSubtasksLength} of{" "}
              {currentTask?.subtasks.length})
            </label>
            {currentTask?.subtasks.map((subtask: any, index: number) => (
              <Subtask key={index} title={subtask.title} />
            ))}
          </section>

          <section className="status-container flex flex-col gap-2">
            <label
              htmlFor="select-status"
              className="text-medium-gray font-bold text-sm dark:text-white"
            >
              Current Status
            </label>
            <Listbox
              value={currentTask?.status}
              onChange={updateStatus} // Stellen Sie sicher, dass updateStatus den neuen Wert direkt annimmt
              as="div"
              className="relative "
            >
              <Listbox.Button
                className="w-full flex justify-between items-center
      border-2 h-10 rounded-md cursor-pointer
      px-2 dark:bg-transparent dark:outline-none dark:text-white
      dark:focus:border-dark-purple
      dark:active:border-dark-purple
      outline-none 
       focus:border-dark-purple active:border-dark-purple"
              >
                {currentTask?.status}
                <img src={chevronDown} alt="Chevron Down" className="w-4 h-3" />
              </Listbox.Button>
              <Listbox.Options className="absolute w-full mt-1 bg-white dark:bg-dark-black shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none z-10">
                {currentBoard?.columns.map((column: any) => (
                  <Listbox.Option
                    key={column.name}
                    value={column.name}
                    className={({ active }) =>
                      `${
                        active ? "bg-bright-gray" : "text-medium-gray"
                      } px-4 py-2`
                    }
                  >
                    {column.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </section>
        </div>

        <div
          className="absolute right-10 top-20 bg-bright-gray dark:bg-dark-black w-52 rounded-md"
          style={{ display: isEllipsDropDownOpen ? "block" : "none" }}
        >
          <div className="content  flex flex-col justify-center px-5 whitespace-nowrap min-h-[80px] gap-4">
            <button
              type="button"
              className="dark:font-bold text-medium-gray"
              onClick={handleToggleEditTaskForm}
            >
              Edit Task
            </button>
            <button
              className="dark:font-bold text-dark-red text-md"
              type="button"
              onClick={handleToggleDeleteTaskForm}
            >
              Delete Task
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ViewTaskForm
