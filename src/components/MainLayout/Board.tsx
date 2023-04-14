import React from "react"
import { TodoItemsColumn } from "../columns/TodoItemsColumn"
import { DoingColumn } from "../columns/DoingColumn"
import { DoneColumn } from "../columns/DoneColumn"

import { RootState } from "../../Redux/rootReducer"
import { useSelector, useDispatch } from "react-redux"

import Navbar from "../Navbar/Navbar"

const Board = () => {

  const isSideBarOpen = useSelector(
    (state: RootState) => state.sidebar.isSideBarOpen
  )

  return (
    <>
      <main
  className={`dark:bg-dark-black bg-dark-white min-h-screen ${
    isSideBarOpen ? 'md:col-span-4 xl:col-span-5' : 'md:col-span-6 lg:col-span-6'
  }`}
>
        <Navbar />

           <section className="columns 
           flex flex-row gap-5  overflow-x-scroll
           md:grid md:grid-cols-3  px-5 mt-5 md:overflow-x-hidden ">
          
          {/* First grid item */}
          <TodoItemsColumn />
          {/* Second grid item */}
          <DoingColumn />
          {/* Third grid item */}
          <DoneColumn />
        </section>

        {/* Render if no boxes here */}
        {/* <EmptyBoardContent   addicon={addicon}  /> */}
      </main>
    </>
  )
}

export default Board
