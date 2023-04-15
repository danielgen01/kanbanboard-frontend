import React, { useState } from "react"
import boardicon from "../../assets/logo-light.svg"
import darkboardicon from "../../assets/logo-dark.svg"
import logomobile from "../../../assets/logo-mobile.svg"
import chevrondown from "../../../assets/icon-chevron-down.svg"
import addicon from "../../../assets/icon-add-task-mobile.svg"
import threepointsicon from "../../../assets/icon-vertical-ellipsis.svg"

import { toggleNewTaskForm } from "../../Redux/features/NewTaskForm/NewTaskFormSlice"
import { toggleEditBoardForm } from "../../Redux/features/EditBoardForm/EditBoardFormSlice"
import { toggleDeleteBoardForm } from "../../Redux/features/DeleteBoardForm/DeleteBoardFormSlice"
import { useAppDispatch, useAppSelector } from "../../Redux/store"
import { RootState } from "../../Redux/rootReducer"

const Navbar = () => {
  const [isEllipsDropDownOpen, setIsEllipsDropDownOpen] = useState(false)

  const handleToggleEditBoardForm = () => {
    dispatch(toggleEditBoardForm())
    setIsEllipsDropDownOpen(false)
  }

  const openDropDown = () => {
    setIsEllipsDropDownOpen(!isEllipsDropDownOpen)
  }
  const isTaskFormOpen = useAppSelector(
    (state: RootState) => state.newTaskForm.isTaskFormOpen
  )
  const dispatch = useAppDispatch()

  const handleToggleNewTaskForm = () => {
    dispatch(toggleNewTaskForm())
  }

  const handleToggleDeleteBoardForm = () => {
    dispatch(toggleDeleteBoardForm())
    setIsEllipsDropDownOpen(false)
  }



  return (
    <nav
      className="h-20 shadow-sm nav-bar-ctn w-screen md:w-auto md:border-b-[1px] border-medium-gray border-none
     dark:bg-dark-gray px-5"
    >
      <section className="navbar-content px-5 flex  items-center w-full h-full">
        <figure className="logo-ctn">
          <img src={logomobile} className="h-8 md:hidden" alt="logo" />
        </figure>
        <button className="chosen-board ml-2 flex items-center gap-2 md:cursor-default">
          <h1
            className="font-bold text-lg
           dark:text-white"
          >
            Platform Launch
          </h1>
          <img src={chevrondown} className="h-2 md:hidden" alt="chevron down" />
        </button>
        <div className="top-right-icons ml-auto flex  items-center gap-5">
          <button
            className="add-btn flex bg-dark-purple py-3 px-5 rounded-2xl items-center gap-2 text-white font-bold hover:bg-bright-purple duration-150"
            onClick={handleToggleNewTaskForm}
          >
            <img src={addicon} alt="addicon" className="" />
            <span className="font-boldtext-white text-sm hidden md:block">
              Add New Task
            </span>
          </button>
          <button className="three-points-ellipsis px-5" onClick={openDropDown}>
            <img src={threepointsicon} alt="ellipsis" className=""/>
          </button>
        </div>

        <form
          className="absolute right-10 top-20 bg-bright-gray dark:bg-dark-black w-52 rounded-md"
          style={{ display: isEllipsDropDownOpen ? "block" : "none" }}
        >
          <div className="content  flex flex-col justify-center px-5 whitespace-nowrap min-h-[80px] gap-4">
            <button className="dark:font-bold text-medium-gray" type="button" onClick={handleToggleEditBoardForm}>
              Edit Board
            </button>
            <button className="dark:font-bold text-dark-red text-md" type="button" onClick={handleToggleDeleteBoardForm}>
              Delete Board
            </button>
          </div>
        </form>
      </section>
    </nav>
  )
}

export default Navbar
