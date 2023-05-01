import React from "react"
import showSlideBarIcon from "../../../assets/icon-show-sidebar.svg"
import { toggleSidebar } from "../../Redux/features/Sidebar/sidebarSlice"
import { RootState } from "../../Redux/rootReducer"
import { useSelector, useDispatch } from "react-redux"
import { BoardColumn } from "../reusable/BoardColumn"

import Navbar from "../Navbar/Navbar"
import EmptyBoardContent from "../reusable/EmptyBoardContent"

const Board = () => {
  const data = useSelector((state: RootState) => state.data)

  const isSideBarOpen = useSelector(
    (state: RootState) => state.sidebar.isSideBarOpen
  )
  const dispatch = useDispatch()
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar())
  }

  const currentBoardName = useSelector(
    (state: RootState) => state.currentBoardName.currentBoardName
  )
  const currentBoard = data.boards.find(
    (board: any) => board.name === currentBoardName
  )

  const colorOptions = [
    "bg-teal-500",
    "bg-blue-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
  ]

  const getRandomColor = () => {
    return colorOptions[Math.floor(Math.random() * colorOptions.length)]
  }

  return (
    <>
      <main
        className={`dark:bg-dark-black bg-dark-white 
        min-h-screen ${
          isSideBarOpen
            ? "md:col-span-4 xl:col-span-5"
            : "md:col-span-6 lg:col-span-6"
        } `}
      >
        <Navbar />

        <section
          className="columns 
           flex flex-row gap-20 md:gap-40 lg:gap-60 xl:gap-70  overflow-x-scroll
             px-5 mt-5 overflow-auto pb-20"
        >
          {currentBoard && currentBoard.columns.length > 0 ? (
            currentBoard.columns.map((column: any) => (
              <BoardColumn
                key={column.name}
                statusName={column.name}
                columnName={`${column.name}`}
                batchColor={getRandomColor()}
              />
            ))
          ) : (
            <EmptyBoardContent />
          )}
        </section>

        <div
          className={`show-slidebar-container fixed z-50 bottom-10 -left-5
         bg-dark-purple px-10 py-5 rounded-3xl hover:bg-bright-purple cursor-pointer duration-100 
         hidden md:${!isSideBarOpen ? "block" : "none"}`}
          onClick={handleToggleSidebar}
        >
          <img src={showSlideBarIcon} alt="" className="w-6" />
        </div>
      </main>
    </>
  )
}

export default Board
