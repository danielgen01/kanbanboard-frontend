import React from "react"
import { TodoItemsColumn } from "./columns/todoItemsColumn"
import {DoingColumn} from "./columns/DoingColumn"
import { DoneColumn } from "./columns/DoneColumn"

const Board = () => {
  return (
    <main className="dark:bg-dark-black bg-dark-white min-h-screen  py-2 px-2 w-screen">
      <section className="columns grid-cols-1 grid md:grid-cols-3">
        {/* First grid item */}
        <TodoItemsColumn />
        <DoingColumn />
        <DoneColumn />
      </section>

      {/* Render if no boxes here */}
      {/* <EmptyBoardContent   addicon={addicon}  /> */}
    </main>
  )
}

export default Board
