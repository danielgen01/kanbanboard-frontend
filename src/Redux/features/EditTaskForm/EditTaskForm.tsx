import React, { useState, useRef, useEffect } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { AddColInput } from "../../../components/reusable/AddColInput"
import { RootState } from "../../rootReducer"
import { useAppDispatch, useAppSelector } from "../../store"
import { toggleEditTaskForm } from "./EditTaskFormSlice"
import { setCurrentTask } from "../currentTask/currentTaskSlice"

const EditTaskForm = () => {
  const data = useAppSelector((state: RootState) => state.data)

  const dispatch = useAppDispatch()

  const isEditTaskFormOpen = useAppSelector(
    (state: RootState) => state.editTaskForm.isEditTaskFormOpen
  )

  const currentTask = useAppSelector((state: RootState) => state.currentTask)
  const currentTaskDescription = useAppSelector(
    (state: RootState) => state.currentTask.description
  )
  const currentTaskTitle = useAppSelector(
    (state: RootState) => state.currentTask.title
  )
  const currentSubtasks = useAppSelector(
    (state: RootState) => state.currentTask.subtasks
  )

  const handleToggleEditTaskForm = () => {
    dispatch(toggleEditTaskForm())
  }

  const [title, setTitle] = useState<string>(currentTask.title)
  const [description, setDescription] = useState<string>(
    currentTask.description
  )
  const [subtasks, setSubtasks] = useState<
    { title: string; isCompleted: boolean }[]
  >(
    currentSubtasks.map((subtask) => ({
      title: subtask.title,
      isCompleted: subtask.isCompleted,
    }))
  )

  useEffect(() => {
    setSubtasks(currentSubtasks)
  }, [currentSubtasks])

  const descriptionRef: any = useRef(null)
  const titleRef: any = useRef(null)

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value)
  }

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value)
  }

  function addNewSubTask() {
    setSubtasks([...subtasks, { title: "", isCompleted: false }])
  }

  function removeSubTask(subtaskToRemove: {
    title: string
    isCompleted: boolean
  }) {
    const index = subtasks.findIndex((subtask) => subtask === subtaskToRemove)
    if (index !== -1) {
      setSubtasks(subtasks.filter((_, i) => i !== index))
    }
  }

  function updateSubTaskTitle(index: number, newTitle: string) {
    setSubtasks((prevSubtasks) =>
      prevSubtasks.map((subtask, i) =>
        i === index ? { ...subtask, title: newTitle } : subtask
      )
    )
  }

  const updateCurrentTask = () => {
    dispatch(
      setCurrentTask({
        title: title,
        description: description,
        subtasks: subtasks,
        status: currentTask.status,
      })
    )
    handleToggleEditTaskForm()
  }

  return (
    <>
      <section
        className="transparent-background bg-black/50 absolute h-screen w-screen top-0 left-0 "
        style={{ display: isEditTaskFormOpen ? "block" : "none" }}
        onClick={handleToggleEditTaskForm}
      ></section>
      <div
        className="form-container bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
     min-h-[550px] w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] rounded-md
     dark:bg-dark-gray "
        style={{ display: isEditTaskFormOpen ? "block" : "none" }}
      >
        <div className="form-content flex flex-col px-5 py-5 gap-4">
          <h1 className="font-bold text-xl dark:text-white">Edit Task</h1>
          <label
            htmlFor=""
            className="text-medium-gray font-bold text-sm dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            className="px-5 border-2 border-bright-gray rounded-md
             h-12 dark:bg-dark-gray
              dark:border-medium-gray dark:border
               dark:text-white font-bold outline-white"
            placeholder="e.g ..."
            defaultValue={currentTaskTitle}
            ref={titleRef}
            onChange={handleTitleChange}
          />

          {/* description textarea field */}
          <div className="input-title-container flex flex-col gap-2">
            <label
              htmlFor="input-description"
              className="text-medium-gray font-bold text-sm
              dark:text-white"
            >
              Description
            </label>
            <textarea
              name="input-title"
              className="border-bright-gray border-2 outline-bright-gray rounded-md h-28 px-2 py-2 text-sm resize-none
               dark:bg-dark-gray dark:border-medium-gray dark:text-white"
              placeholder="e.g its always good to take a small break from working to prevent burnouts"
              defaultValue={currentTaskDescription}
              ref={descriptionRef}
              onChange={handleDescriptionChange}
            />
          </div>

          <section className="board-columns flex flex-col gap-2">
            <label
              htmlFor=""
              className="text-sm text-medium-gray font-bold dark:text-white"
            >
              Subtasks
            </label>
            {subtasks.map((subtask, index) => (
              <div key={index}>
                <AddColInput
                  defaultValue={subtask.title}
                  onRemove={() => removeSubTask(subtask)}
                  onInputChange={(newTitle) =>
                    updateSubTaskTitle(index, newTitle)
                  }
                />
              </div>
            ))}
          </section>
          <section className="buttons flex flex-col gap-5">
            <button
              className="flex items-center gap-2 text-dark-purple w-full justify-center mt-2 bg-bright-gray rounded-3xl h-12 font-bold"
              onClick={addNewSubTask}
            >
              <AiOutlinePlus className="font-bold" />
              Add New Subtask
            </button>
            <button
              className="w-full text-white font-bold bg-dark-purple h-10 gap-2 rounded-3xl"
              onClick={updateCurrentTask}
            >
              Save Changes
            </button>
          </section>
        </div>
      </div>
    </>
  )
}

export default EditTaskForm
