import React, { useState, useRef, useEffect } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { AddColInput } from "../../../components/reusable/AddColInput"
import { AiOutlinePlus } from "react-icons/ai"
import { useAppDispatch, useAppSelector } from "../../store"
import { RootState } from "../../rootReducer"
import { toggleNewTaskForm } from "./NewTaskFormSlice"
import { addTask } from "../Data/DataSlice"

const NewTaskForm = () => {
  const data = useAppSelector((state: RootState) => state.data)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [subtasks, setSubtasks] = useState<string[]>([""])

  const descriptionRef: any = useRef(null)
  const titleRef: any = useRef(null)
  const selectRef: any = useRef(null)

  const dispatch = useAppDispatch()

  const isTaskFormOpen = useAppSelector(
    (state: RootState) => state.newTaskForm.isTaskFormOpen
  )

  const currentBoardName = useAppSelector(
    (state: RootState) => state.currentBoardName.currentBoardName
  )

  const currentBoard = data.boards.find(
    (board) => board.name === currentBoardName
  )

  const firstColumnName: any = currentBoard?.columns[0].name
  const [status, setStatus] = useState(firstColumnName)

  useEffect(() => {
    setStatus(firstColumnName)
  }, [currentBoard])

  const currentBoardIndex = data.boards.findIndex(
    (board) => board.name === currentBoardName
  )

  const matchingColumn = currentBoard?.columns.find(
    (column) => column.name === status
  )

  const matchingColumnIndex: number =
    currentBoard?.columns.findIndex((column) => column.name === status) ?? 0

  const columnNames = currentBoard?.columns.map((column) => column.name)

  function addNewSubTask() {
    setSubtasks([...subtasks, ""])
  }

  function removeSubTask(title: string) {
    const index = subtasks.findIndex((subtaskname) => subtaskname === title)
    if (index !== -1) {
      setSubtasks(subtasks.filter((_, i) => i !== index))
    }
  }

  function handleSubTaskNameChange(index: number, value: string) {
    setSubtasks((prevSubtasks) => {
      const newSubtasks = [...prevSubtasks]
      newSubtasks[index] = value
      return newSubtasks
    })
  }

  const handleAddTask = () => {
    if (title && description && subtasks && subtasks.length > 0) {
      dispatch(
        addTask({
          boardIndex: currentBoardIndex,
          columnIndex: matchingColumnIndex,
          task: {
            title: title,
            description: description,
            status: status,
            subtasks: subtasks.map((subtaskTitle) => ({
              title: subtaskTitle,
              isCompleted: false,
            })),
          },
        })
      )

      handleToggleNewTaskForm()
      setSubtasks([""])
      titleRef.current.value = ""
      descriptionRef.current.value = ""
    } else {
      return alert("All fields are required")
    }
    setTitle("")
    setDescription("")
  }

  const handleToggleNewTaskForm = () => {
    dispatch(toggleNewTaskForm())
  }

  function updateTitle() {
    setTitle(titleRef.current.value)
  }

  function updateDescription() {
    setDescription(descriptionRef.current.value)
  }

  function updateStatus() {
    setStatus(selectRef.current.value)
  }

  return (
    <>
      <section
        className="transparent-background bg-black/50 absolute h-screen w-screen top-0 left-0"
        style={{ display: isTaskFormOpen ? "block" : "none" }}
        onClick={handleToggleNewTaskForm}
      ></section>
      <form
        className="form-container bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
     min-h-[550px] w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%]  rounded-md
     dark:bg-dark-gray"
        style={{ display: isTaskFormOpen ? "block" : "none" }}
      >
        <div className="form-content flex flex-col h-full w-full px-5 py-5 gap-5">
          <AiOutlineClose
            className="ml-auto dark:text-white text-black cursor-pointer"
            onClick={handleToggleNewTaskForm}
          />
          <h1 className="font-bold text-xl dark:text-white">Add new Task</h1>
          {/* First input field  */}
          <div className="input-title-container flex flex-col gap-2">
            <label
              htmlFor="input-title"
              className="text-medium-gray font-bold text-sm 
              dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              name="input-title"
              id="input-title"
              className="border-bright-gray border-2 outline-bright-gray rounded-md h-10 px-2 text-sm
              dark:bg-dark-gray dark:border-medium-gray dark:text-white"
              placeholder="e.g Take coffee break"
              ref={titleRef}
              onChange={updateTitle}
              required={true}
            />
          </div>
          {/* description textarea field */}
          <div className="input-title-container flex flex-col gap-2">
            <label
              htmlFor="textarea-description"
              className="text-medium-gray font-bold text-sm
              dark:text-white "
            >
              Description
            </label>
            <textarea
              id="textarea-description"
              name="description"
              className="border-bright-gray border-2 outline-bright-gray rounded-md h-20 px-2 py-2 text-sm resize-none
               dark:bg-dark-gray dark:border-medium-gray dark:text-white"
              placeholder="e.g its always good to take a small break from working to prevent burnouts"
              required={true}
              onChange={updateDescription}
              ref={descriptionRef}
            />
          </div>

          <section className="subtasks flex flex-col gap-2">
            <label
              htmlFor=""
              className="text-sm text-medium-gray font-bold dark:text-white"
            >
              Subtasks
            </label>
            {subtasks.map((title, index) => (
              <AddColInput
                key={index}
                defaultValue={"Subtask " + (index + 1)}
                onRemove={() => removeSubTask(title)}
                onInputChange={(event) =>
                  handleSubTaskNameChange(index, event.target.value)
                }
              />
            ))}
            <button
              className="flex items-center gap-2 text-dark-purple
               w-full justify-center mt-2 bg-bright-gray rounded-3xl
                h-12 font-bold hover:opacity-70 duration-150"
              type="button"
              onClick={addNewSubTask}
            >
              <AiOutlinePlus className="font-bold" />
              Add New Subtask
            </button>
          </section>

          {/* Select box for status  */}
          <div className="input-title-container flex flex-col gap-2">
            <label
              htmlFor="select-status"
              className="text-medium-gray font-bold text-sm
              dark:text-white"
            >
              Status
            </label>
            <select
              name="select-status"
              className="border-bright-gray border-2 outline-bright-gray rounded-md h-10 px-2 text-sm
              dark:text-white dark:bg-dark-gray dark:border-medium-gray"
              ref={selectRef}
              onChange={updateStatus}
              value={status}
            >
              {columnNames?.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          {/* Create task button */}

          <button
            className="bg-dark-purple text-white font-bold text-sm py-3
             rounded-3xl hover:bg-bright-purple duration-200"
            type="button"
            onClick={handleAddTask}
          >
            Create Task
          </button>
        </div>
      </form>
    </>
  )
}

export default NewTaskForm
