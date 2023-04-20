import React, { useEffect } from "react"
import { Kanbanbox } from "./Kanbanbox"
import { MdSwipeLeft } from "react-icons/md"
import data from "../../../data.json"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/rootReducer"

type props = {
    statusName:string
    columnName:string
    batchColor:string
}

export const BoardColumn: React.FC<props> = ({statusName,
    columnName, batchColor}) => {


  const currentBoard = useSelector(
    (state: RootState) => state.currentBoard.currentBoard
  )
  const board = data.boards.find((board: any) => board.name === currentBoard)
  
  const boardIndex = data.boards.findIndex(
    (board: any) => board.name === currentBoard
  )
  console.log(currentBoard)

  let num = 0

    if (boardIndex >= 0) {
      let num = data.boards[boardIndex].columns[2].tasks.length
    }
  

  return (
    <div className="grid-item-2(doingItems) flex flex-col gap-4">
      <div className="headline flex items-center gap-2">
        <div className={`h-5 w-5 rounded-full ${batchColor} `}></div>
        <h1 className="text-medium-gray -tracking-tighter text-md uppercase font-bold">
        {columnName}  ({num}){" "}
        </h1>
      
      </div>

      {boardIndex >= 0 &&
        data.boards[boardIndex].columns.map((column: any) => (
          <div key={column.id} className="flex flex-col gap-3">
            {column.tasks
              .filter((task: any) => task.status === statusName)
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
