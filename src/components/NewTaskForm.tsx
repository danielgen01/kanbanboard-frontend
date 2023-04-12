import React from "react"

const NewTaskForm = () => {
  return (
    <div className="transparent-background bg-black/50 absolute h-screen w-screen top-0 left-0">
      <div
        className="form-container bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
     min-h-[550px] w-4/5 rounded-md"
      >
        <div className="form-content flex flex-col h-full w-full px-5 py-5 gap-5">
          <h1 className="font-bold text-xl">Add new Task</h1>
          {/* First input field  */}
          <div className="input-title-container flex flex-col gap-2">
            <label
              htmlFor="input-title"
              className="text-medium-gray font-bold text-sm"
            >
              Title
            </label>
            <input
              type="text"
              name="input-title"
              className="border-bright-gray border-2 outline-bright-gray rounded-md h-10 px-2 text-sm"
              placeholder="e.g Take coffee break"
            />
          </div>
          {/* description textarea field */}
          <div className="input-title-container flex flex-col gap-2">
            <label
              htmlFor="input-description"
              className="text-medium-gray font-bold text-sm"
            >
              Description
            </label>
            <textarea
              name="input-title"
              className="border-bright-gray border-2 outline-bright-gray rounded-md h-20 px-2 py-2 text-sm resize-none"
              placeholder="e.g its always good to take a small break from working to prevent burnouts"
            />
          </div>

          {/* Select box for status  */}
          <div className="input-title-container flex flex-col gap-2">
            <label
              htmlFor="select-status"
              className="text-medium-gray font-bold text-sm"
            >
              Status
            </label>
            <select
              name="select-status"
              className="border-bright-gray border-2 outline-bright-gray rounded-md h-10 px-2 text-sm"
            >
              <option>Todo</option>
              <option>Doing</option>
              <option>Done</option>
            </select>
          </div>

          {/* Create task button */}

          <button className="bg-dark-purple text-white font-bold text-sm py-3 rounded-3xl">
            Create Task
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewTaskForm