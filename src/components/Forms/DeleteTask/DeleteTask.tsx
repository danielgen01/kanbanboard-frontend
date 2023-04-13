import React from "react"

const DeleteTask = () => {
  return (
    <section className="transparent-background bg-black/50 absolute top-0 left-0 h-screen w-screen">
      <div className="delete-box px-5 min-h-[300px] bg-white dark:bg-dark-gray w-[90%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md">
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
          <div className="button flex flex-col gap-3">
            <button
              className="bg-dark-red text-white font-bold py-2 px-4 rounded-3xl"
              type="button"
              onClick={() => window.location.reload()}
            >
              Delete
            </button>
            <button
              className=" bg-bright-gray dark:bg-white text-dark-purple font-bold py-2 px-4 rounded-3xl"
              type="button"
              onClick={() => window.location.reload()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeleteTask
