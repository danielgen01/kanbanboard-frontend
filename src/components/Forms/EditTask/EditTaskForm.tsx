import React from "react"
import { Subtask } from "./Subtask"
import ellipsIcon from "../../../../assets/icon-vertical-ellipsis.svg"

const EditTaskForm = () => {
  return (
    <section className="transparent-background absolute top-0 left-0 h-screen w-screen bg-black/60">
      <form
        className="edit-task-container px-10 w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] min-h-[500px] bg-white dark:bg-dark-gray
       fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md"
      >
        <div className="container-content flex flex-col px-1 py-5 gap-6">
          <div className="headline-and-edit-task-icon flex items-center">
          <h1 className="text-black dark:text-white font-bold task-title">
            Lorem ipsum dolor sit amet cscdunt culpa, blanditiis quibusdam
            tempore!
          </h1>
          <img src={ellipsIcon} alt="" />
          </div>
          
          <p className="text-medium-gray">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quia
            molestias debitis facilis ea
          </p>

          <section className="subtasks flex flex-col justify-center gap-2">
            <label
              htmlFor="check-task"
              className="text-medium-gray dark:text-white font-bold text-sm"
            >
              Subtasks (2 of 3)
            </label>

            <Subtask />
            <Subtask />
            <Subtask />
          </section>

          <section className="status-container flex flex-col gap-2">
            <label
              htmlFor="select-status"
              className="text-medium-gray font-bold text-sm dark:text-white"
            >
              Current Status
            </label>
            <select
              name="select-status"
              id="select-staus"
              className="border-bright-gray border-2 h-10 rounded-md px-2"
            >
              <option className="text-black dark:text-white" value="Doing">Doing</option>
              <option className="text-black dark:text-white" value="Done">Done</option>
              <option className="text-black dark:text-white" value="Todo">Todo</option>
            </select>
          </section>
        </div>
      </form>
    </section>
  )
}

export default EditTaskForm
