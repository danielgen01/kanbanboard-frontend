import React from "react"
import { Kanbanbox } from "./Kanbanbox"

const Board = () => {
  return (
    <main className="dark:bg-dark-black bg-dark-white min-h-screen  py-2 px-2 ">
      <section className="columns grid-cols-1 grid ">
        {/* First grid item */}
        <div className="grid-item-1 flex flex-col gap-4">
          <div className="headline flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-sky-500 dark:bg-teal-500"></div>
            <h1 className="text-medium-gray -tracking-tighter text-md uppercase font-bold">
              Todo (0){" "}
            </h1>
          </div>

   <Kanbanbox    title={"Drama"} subtasksCount={0}/>
   <Kanbanbox    title={"Drama"} subtasksCount={0}/>

        </div>
      </section>

      {/* Render if no boxes here */}
      {/* <EmptyBoardContent   addicon={addicon}  /> */}
    </main>
  )
}

export default Board

 
  