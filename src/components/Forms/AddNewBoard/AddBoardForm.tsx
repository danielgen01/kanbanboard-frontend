import React from "react"
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai"
import { AddColInput } from "./AddColInput"

import { useSelector, useDispatch } from "react-redux"
import { toggleAddBoardForm } from "../../../Redux/features/NewBoardForm/NewBoardFormSlice"
import { useAppDispatch, useAppSelector } from "../../../Redux/store"
import { RootState } from "../../../Redux/rootReducer"

const AddBoardForm: React.FC = () => {
  const isBoardFormOpen = useAppSelector(
    (state: RootState) => state.newboardform.isBoardFormOpen
  )
  const dispatch = useAppDispatch()

  const handleToggleForm = () => {
    dispatch(toggleAddBoardForm())
  }
  return (
    <section
      className="transparent-background bg-black/50 absolute h-screen w-screen top-0 left-0 "
      style={{ display: isBoardFormOpen ? "block" : "none" }}
    >
      <div
        className="form-container bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
     min-h-[550px] w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] rounded-md
     dark:bg-dark-gray"
      >
        <div className="form-content flex flex-col px-5 py-5 gap-4">
          <div className="flex justify-between">
            <h1 className="font-bold text-xl dark:text-white">Add new board</h1>
            <AiOutlineClose
              className="text-medium-gray dark:text-white cursor-pointer"
              onClick={handleToggleForm}
            />
          </div>
          <label
            htmlFor=""
            className="text-medium-gray font-bold text-sm dark:text-white"
          >
            Board Name
          </label>
          <input
            type="text"
            className="px-5 border-2 border-bright-gray rounded-md h-12 dark:bg-dark-gray dark:border-medium-gray dark:border dark:text-white"
            placeholder="e.g Web Design"
          />
          <section className="board-columns flex flex-col gap-2">
            <label
              htmlFor=""
              className="text-sm text-medium-gray font-bold dark:text-white"
            >
              Board Columns
            </label>
            <AddColInput defaultValue={"Todo"} />
            <AddColInput defaultValue={"Doing"} />
            <AddColInput defaultValue={"Done"} />
          </section>
          <section className="buttons flex flex-col gap-5">
            <button
              className="flex items-center justify-center w-full text-dark-purple font-bold bg-bright-gray h-10 gap-2 rounded-3xl 
            dark:bg-white"
            >
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
