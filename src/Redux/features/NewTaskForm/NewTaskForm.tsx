import React, { useState, useRef } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { AddColInput } from "../../../components/reusable/AddColInput"
import { AiOutlinePlus } from "react-icons/ai"

import { useAppDispatch, useAppSelector } from "../../store"
import { RootState } from "../../rootReducer"
import { toggleNewTaskForm } from "./NewTaskFormSlice"
import { addBox } from "../columns/Todo/TodoSlice"

const NewTaskForm = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const descriptionRef: any = useRef(null)
  const titleRef: any = useRef(null)

  const isTaskFormOpen = useAppSelector(
    (state: RootState) => state.newTaskForm.isTaskFormOpen
  )

  const dispatch = useAppDispatch()

  const handleToggleNewTaskForm = () => {
    dispatch(toggleNewTaskForm())
  }

  const todoItems = useAppSelector(
    (state: RootState) => state.todoStates.todoItems
  )

 

  function calculateTitle() {
    setTitle(titleRef.current?.value)
  }

  function calculateDescription() {
    setDescription(descriptionRef.current?.value)
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
              onChange={calculateTitle}
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
              onChange={calculateDescription}
              required={true}
              
            />
          </div>

          <section className="subtasks flex flex-col gap-2">
            <label
              htmlFor=""
              className="text-sm text-medium-gray font-bold dark:text-white"
            >
              Subtasks
            </label>
            <AddColInput defaultValue={""} />
            <AddColInput defaultValue={""} />
            <button className="flex items-center gap-2 text-dark-purple w-full justify-center mt-2 bg-bright-gray rounded-3xl h-12 font-bold">
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
              // onChange={console.log("test")}
            >
              <option className="text-black dark:text-white">Todo</option>
              <option className="text-black dark:text-white">Doing</option>
              <option className="text-black dark:text-white">Done</option>
            </select>
          </div>

          {/* Create task button */}

          <button
            className="bg-dark-purple text-white font-bold text-sm py-3 rounded-3xl"
            type="button"
            
          >
            Create Task
          </button>
        </div>
      </form>
    </>
  )
}

export default NewTaskForm
