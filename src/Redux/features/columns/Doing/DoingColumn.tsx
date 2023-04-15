import React from "react"
import { Kanbanbox } from "../../../../components/reusable/Kanbanbox"
import { MdSwipeLeft } from "react-icons/md"

export const DoingColumn: React.FC = () => {
  return (
    <div className="grid-item-2(doingItems) flex flex-col gap-4">
      <div className="headline flex items-center gap-2">
        <div className="h-5 w-5 rounded-full bg-dark-purple dark:bg-dark-purple"></div>
        <h1 className="text-medium-gray -tracking-tighter text-md uppercase font-bold">
          Doing (0){" "}
        </h1>
        {/* <div className="swipe-icon-text md:hidden ml-auto">
          <h1 className="">Swipe</h1>
          <MdSwipeLeft />
        </div> */}
      </div>
      {/* HIER SPÄTER .map() einfügen */}
      {/* <Kanbanbox title={"Drama"} subtasksCount={0} />
      <Kanbanbox title={"ostblock"} subtasksCount={0} /> */}
    </div>
  )
}
