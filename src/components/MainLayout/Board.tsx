import React from "react"
import { TodoItemsColumn } from "../columns/TodoItemsColumn"
import { DoingColumn } from "../columns/DoingColumn"
import { DoneColumn } from "../columns/DoneColumn"
import Navbar from "../Navbar"

const Board = () => {
  return (
    <>
      <main className="dark:bg-dark-black bg-dark-white min-h-screen  md:px-5 lg:px-10 col-span-4">
        <Navbar />

        <section className="columns grid md:grid-cols-3 overflow-x-scroll md:overflow-x-hidden ">
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
