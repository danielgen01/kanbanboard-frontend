import React from "react"
import { Kanbanbox } from "../../../../components/reusable/Kanbanbox"
import { MdSwipeLeft } from "react-icons/md"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../../rootReducer"
import data from "../../../../../data.json"

export const TodoItemsColumn: React.FC = () => {
  const dispatch = useDispatch()

  const currentBoard = useSelector(
    (state: RootState) => state.currentBoard.currentBoard
  )

  const board = data.boards.find((board: any) => board.name === currentBoard)
  const boardIndex = data.boards.findIndex(
    (board: any) => board.name === currentBoard
  )
  

  let num = 0
  if (boardIndex >= 0) {
    let num = data.boards[boardIndex].columns[2].tasks.length
  }
  
  return (
    <div className="grid-item-1(todoItems) flex flex-col gap-4">
      <div className="headline flex items-center gap-2">
        <div className="h-5 w-5 rounded-full bg-sky-500 dark:bg-teal-500"></div>
        <h1 className="text-medium-gray -tracking-tighter text-md uppercase font-bold">
          {board?.columns[0].name} ({num}){" "}
        </h1>
      </div>

      {/* HIER SPÄTER .map() einfügen */}

      {boardIndex >= 0 &&
        data.boards[boardIndex].columns.map((column: any) => (
          <div key={column.id} className="flex flex-col gap-3">
            {column.tasks
              .filter((task: any) => task.status === "Todo")
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
