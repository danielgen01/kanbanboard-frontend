import React from "react"
import { Kanbanbox } from "../Kanbanbox"
import { MdSwipeLeft } from "react-icons/md"
import datajson from "../../../data.json"

export const TodoItemsColumn: React.FC = () => {

   
  return (
    <div className="grid-item-1(todoItems) flex flex-col gap-4">
      <div className="headline flex items-center gap-2">
        <div className="h-5 w-5 rounded-full bg-sky-500 dark:bg-teal-500"></div>
        <h1 className="text-medium-gray -tracking-tighter text-md uppercase font-bold">
          Todo (0){" "}
        </h1>
      </div>
      <div className="swipe-icon-text md:hidden ml-auto">
        <div className="swipe-icon-text md:hidden ml-auto">
          <h1 className="">Swipe</h1>
          <MdSwipeLeft />
        </div>
      </div>

      {/* HIER SPÄTER .map() einfügen */}

      <Kanbanbox title={"Drama"} subtasksCount={0} />
      <Kanbanbox title={"ostblock"} subtasksCount={0} />
    </div>
  )
}
