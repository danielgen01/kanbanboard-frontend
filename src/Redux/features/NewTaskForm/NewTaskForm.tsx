import React from "react"
import { AiOutlineClose } from "react-icons/ai"
import { AddColInput } from "../../../components/reusable/AddColInput"
import { AiOutlinePlus } from "react-icons/ai"
import { useNewTask } from "./useNewTask"
import { Listbox } from "@headlessui/react"
import chevronDown from "../../../../assets/icon-chevron-down.svg"

const NewTaskForm = () => {
  const {
    data,
    title,
    setTitle,
    description,
    setDescription,
    subtasks,
    setSubtasks,
    descriptionRef,
    titleRef,
    selectRef,
    isTaskFormOpen,
    currentBoardName,
    currentBoard,
    firstColumnName,
    currentBoardIndex,
    matchingColumn,
    matchingColumnIndex,
    columnNames,
    addNewSubTask,
    removeSubTask,
    handleSubTaskNameChange,
    handleAddTask,
    handleToggleNewTaskForm,
    updateTitle,
    updateDescription,
    updateStatus,
    status,
    setStatus,
  } = useNewTask()

  return (
    <>
      <section
        className="transparent-background bg-black/50 fixed h-screen w-screen top-0 left-0"
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
              className="border-bright-gray border-2  rounded-md h-10 px-2 text-sm
              dark:bg-dark-gray dark:border-medium-gray dark:text-white dark:outline-none dark:focus:border-dark-purple"
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
              className="border-bright-gray border-2  rounded-md h-20 px-2 py-2 text-sm resize-none
               dark:bg-dark-gray dark:border-medium-gray dark:text-white dark:outline-none dark:focus:border-dark-purple"
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
                defaultValue={""}
                onRemove={() => removeSubTask(title)}
                onInputChange={(event) =>
                  handleSubTaskNameChange(index, event.target.value)
                }
              />
            ))}
            <button
              className="flex items-center gap-2 text-dark-purple
               w-full justify-center mt-2 bg-bright-gray dark:bg-white rounded-3xl
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
            <Listbox
              value={status}
              onChange={updateStatus}
              as="div"
              className="relative"
            >
              <Listbox.Button
                className="w-full flex justify-between items-center
      border-2 h-10 rounded-md cursor-pointer
      px-2 dark:bg-dark-gray dark:outline-none dark:text-white dark:border-medium-gray
      border-bright-gray focus:border-dark-purple active:border-dark-purple"
              >
                <span>{status}</span>
                <img src={chevronDown} alt="chevron down" className="w-3 h-2" />
              </Listbox.Button>
              <Listbox.Options className="absolute w-full mt-1 bg-white  dark:bg-dark-black shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none z-10">
                {columnNames?.map((name) => (
                  <Listbox.Option
                    key={name}
                    value={name}
                    className={({ active }) =>
                      `${
                        active ? "bg-bright-gray" : "text-medium-gray"
                      } px-4 py-2`
                    }
                  >
                    {name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
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
