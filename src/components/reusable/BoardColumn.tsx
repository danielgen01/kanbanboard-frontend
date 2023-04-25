import React, { useEffect, useState } from "react"
import { Kanbanbox } from "./Kanbanbox"
import { MdSwipeLeft } from "react-icons/md"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/rootReducer"

type props = {
  statusName: string
  columnName: string
  batchColor: string
}

export const BoardColumn: React.FC<props> = ({
  statusName,
  columnName,
  batchColor,
}) => {
  const data = useSelector((state: RootState) => state.data)

  const currentBoardName = useSelector(
    (state: RootState) => state.currentBoard.currentBoard.name
  )
  const currentBoard = useSelector(
    (state: RootState) => state.currentBoard.currentBoard
  )
  const boardIndex = data.boards.findIndex(
    (board: any) => board.name === currentBoardName
  )

  return (
    <div className="grid-item-2(doingItems) flex flex-col gap-4">
      <div className="headline flex items-center gap-2">
        <div className={`h-5 w-5 rounded-full ${batchColor} `}></div>
        <h1 className="text-medium-gray -tracking-tighter text-md uppercase font-bold">
          {columnName}{" "}
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
