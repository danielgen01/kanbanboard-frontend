import React from "react"
import addicon from "../../../assets/icon-add-task-mobile.svg"

 const EmptyBoardContent = ()=> {
  return (
    <div className="empty-board-content w-full
     flex pt-[20%] items-center justify-center
      flex-col ">
      <h1 className="text-center text-medium-gray font-bold text-xl">
        This board is empty. Create a new <br />
        column to get started.
      </h1>
      <button
        className="mt-5 text-white text-xl
         bg-dark-purple flex items-center gap-2 px-7 py-4 rounded-3xl font-bold
        "
      >
        <img src={addicon} alt="" />
        Add new Column
      </button>
    </div>
  )
}

export default EmptyBoardContent