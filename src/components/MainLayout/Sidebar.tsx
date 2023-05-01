import React, { useState, useEffect } from "react"
import { RootState } from "../../Redux/rootReducer"
import { toggleSidebar } from "../../Redux/features/Sidebar/sidebarSlice"
import { useSelector, useDispatch } from "react-redux"
import { toggleAddBoardForm } from "../../Redux/features/NewBoardForm/NewBoardFormSlice"
import LogoDark from "../../../assets/logo-dark.svg"
import LogoLight from "../../../assets/logo-light.svg"
import boardicon from "../../../assets/icon-board.svg"
import { AiOutlinePlus } from "react-icons/ai"
import iconLight from "../../../assets/icon-light-theme.svg"
import iconDark from "../../../assets/icon-dark-theme.svg"
import iconShowSidebar from "../../../assets/icon-show-sidebar.svg"
import iconHideSidebar from "../../../assets/icon-hide-sidebar.svg"
import CustomBoardName from "../reusable/CustomBoardName"
import { ToggleTheme } from "../reusable/ToggleTheme"

const Sidebar: React.FC = () => {
  const data = useSelector((state: RootState) => state.data)

  const isSideBarOpen = useSelector(
    (state: RootState) => state.sidebar.isSideBarOpen
  )
  const dispatch = useDispatch()

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar())
  }

  const isFormOpen = useSelector(
    (state: RootState) => state.newboardform.isBoardFormOpen
  )

  const handleToggleBoardForm = () => {
    dispatch(toggleAddBoardForm())
  }

  const boardTitles = data.boards.map((board) => board.name)

  return (
    <>
      <aside
        className={`hidden md:flex flex-col gap-4 min-h-screen py-5
     dark:bg-dark-gray md:col-span-2 xl:col-span-1 border-r-[.5px] border-medium-gray  md:${
       isSideBarOpen ? "block" : "hidden"
     }`}
      >
        <figure className="flex w-full justify-center">
          <img src={LogoLight} alt="" className="hidden dark:block" />
          <img src={LogoDark} alt="" className="block dark:hidden" />
        </figure>
        <h2 className="uppercase px-10 mt-4 text-medium-gray font-bold tracking-widest text-sm">
          all boards ({boardTitles.length})
        </h2>

        {/* Render the BoardList */}
        <section className="boards-list-buttons flex flex-col gap-2">
          {data.boards.map((board) => (
            <React.Fragment key={board.name}>
              <CustomBoardName //CustomBoard is each boardtitle
                name={board.name}
              />
            </React.Fragment>
          ))}

          <button
            className="flex items-center px-10 py-4 rounded-3xl -ml-5 gap-3
         font-bold text-sm  hover:bg-bright-gray duration-200"
            onClick={handleToggleBoardForm}
          >
            <img src={boardicon} alt="logo" className="fill-dark-purple" />
            <span className="flex items-center gap-2 text-dark-purple">
              {" "}
              <AiOutlinePlus /> Create new Board
            </span>
          </button>
        </section>

        <footer className="mt-auto">
          <ToggleTheme />
          <div
            className="toggle-side-bar-container w-[90%]
         flex items-center px-10 mt-5 hover:bg-bright-gray
          dark:hover:bg-white h-12 cursor-pointer duration-200 rounded-3xl -ml-5"
            onClick={handleToggleSidebar}
          >
            <button className="toggle-side-bar-content flex items-center gap-2">
              <img src={iconHideSidebar} alt="icon" className="h-4" />
              <p className="text-medium-gray font-bold text-sm hover:text-dark-purple">
                Hide Sidebar
              </p>
            </button>
          </div>
        </footer>
      </aside>
    </>
  )
}

export default Sidebar
