import React from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { InputElement } from "./InputElement"

const AddBoardForm = () => {
  return (
    <section className="transparent-background bg-black/50 absolute h-screen w-screen top-0 left-0 ">
      <div
        className="form-container bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
     min-h-[550px] w-4/5 rounded-md
     dark:bg-dark-gray"
      >
        <div className="form-content flex flex-col px-5 py-5 gap-4">
          <h1 className="font-bold text-xl dark:text-white">Add new board</h1>
          <label htmlFor="" className="text-medium-gray font-bold text-sm">
            Board Name
          </label>
          <input
            type="text"
            className="px-5 border-2 border-bright-gray rounded-md h-12 dark:bg-dark-gray dark:border-medium-gray dark:border dark:text-white"
            placeholder="e.g Web Design"
          />
          <section className="board-columns flex flex-col gap-2">
            <label htmlFor="" className="text-sm text-medium-gray font-bold">
              Board Columns
            </label>
            <InputElement defaultValue={"Todo"} />
            <InputElement defaultValue={"Doing"} />
            <InputElement defaultValue={"Done"} />
          </section>
          <section className="buttons flex flex-col gap-5">
            <button className="flex items-center justify-center w-full text-dark-purple font-bold bg-bright-gray h-10 gap-2 rounded-3xl 
            dark:bg-white">
              <AiOutlinePlus className="text-dark-purple font-bold" /> Add new
              Column
            </button>
            <button className="w-full text-white font-bold bg-dark-purple h-10 gap-2 rounded-3xl">
              Create new Board
            </button>
          </section>
        </div>
      </div>
    </section>
  )
}

export default AddBoardForm
