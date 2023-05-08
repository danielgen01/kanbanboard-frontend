import React, { useState, useRef, useEffect } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { AddColInput } from "../../../components/reusable/AddColInput"
import { useEditTask } from "./useEditTask"

const EditTaskForm = ({ key }: { key: string }) => {
  const {
    data,
    isEditTaskFormOpen,
    currentTask,
    currentTaskDescription,
    currentTaskTitle,
    currentSubtasks,
    currentBoardName,
    currentBoard,
    handleToggleEditTaskForm,
    title,
    setTitle,
    description,
    setDescription,
    subtasks,
    setSubtasks,
    descriptionRef,
    titleRef,
    handleTitleChange,
    addNewSubTask,
    handleDescriptionChange,
    removeSubTask,
    updateSubTaskTitle,
    handleUpdateTask,
    activeTaskData,
  } = useEditTask()

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
               dark:text-white font-bold outline-white dark:outline-none dark:focus:border-dark-purple focus:border-dark-purple outline-none"
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
              className="border-bright-gray border-2 rounded-md h-28 px-2 py-2 text-sm resize-none
               dark:bg-dark-gray dark:border-medium-gray
                dark:text-white dark:outline-none dark:focus:border-dark-purple focus:border-dark-purple outline-none "
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
            {subtasks.map((subtask) => (
              <AddColInput
                key={subtask.id}
                defaultValue={subtask.title}
                onRemove={() => removeSubTask(subtask)}
                onInputChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  updateSubTaskTitle(subtask.id, event?.target.value)
                }
              />
            ))}
          </section>
          <section className="buttons flex flex-col gap-5">
            <button
              className="flex items-center gap-2 text-dark-purple w-full 
              justify-center mt-2
               bg-bright-gray rounded-3xl h-12 font-bold 
                hover:opacity-70 duration-200"
              onClick={addNewSubTask}
            >
              <AiOutlinePlus className="font-bold" />
              Add New Subtask
            </button>
            <button
              className="w-full text-white font-bold bg-dark-purple h-10
               gap-2 rounded-3xl  hover:bg-bright-purple duration-200"
              onClick={handleUpdateTask}
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
