import React from "react"
import { Kanbanbox } from "../../../../components/reusable/Kanbanbox"
import { MdSwipeLeft } from "react-icons/md"
import data from "../../../../../data.json"
import { useSelector } from "react-redux"
import { RootState } from "../../../rootReducer"

export const DoneColumn: React.FC = () => {
  const currentBoard = useSelector(
    (state: RootState) => state.currentBoard.currentBoard
  )
  const board = data.boards.find((board: any) => board.name === currentBoard)
  console.log(board)
  const boardIndex = data.boards.findIndex(
    (board: any) => board.name === currentBoard
  )
  console.log(boardIndex)

  let num = data.boards[0].columns[2].tasks.length

  return (
    <div className="grid-item-3(doneItems) flex flex-col gap-4">
      <div className="headline flex items-center gap-2">
        <div className="h-5 w-5 rounded-full bg-green-500 dark:bg-green-500"></div>
        <h1 className="text-medium-gray -tracking-tighter text-md uppercase font-bold">
          Done ({num}){" "}
        </h1>
        {/* <div className="swipe-icon-text md:hidden ml-auto">
          <h1 className="">Swipe</h1>
          <MdSwipeLeft />
        </div> */}
      </div>

      {data.boards[boardIndex].columns.map((column: any) => (
        <div key={column.id} className="flex flex-col gap-3">
          {column.tasks
            .filter((task: any) => task.status === "Done")
            .map((task: any) => (
              <Kanbanbox
                key={task.name}
                title={task.title}
                subtasksCount={task.subtasks.length}
                subtasks={task.subtasks}
                description={task.description}
                id={task.id}
              />
            ))}
        </div>
      ))}
    </div>
  )
}
