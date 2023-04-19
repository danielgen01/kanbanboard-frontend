import React from "react"
import { Kanbanbox } from "../../../../components/reusable/Kanbanbox"
import { MdSwipeLeft } from "react-icons/md"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../../rootReducer"
import data from "../../../../../data.json"

export const TodoItemsColumn: React.FC = () => {
  const dispatch = useDispatch()
  const todoItems = useSelector(
    (state: RootState) => state.todoStates.todoItems
  )

  return (
    <div className="grid-item-1(todoItems) flex flex-col gap-4">
      <div className="headline flex items-center gap-2">
        <div className="h-5 w-5 rounded-full bg-sky-500 dark:bg-teal-500"></div>
        <h1 className="text-medium-gray -tracking-tighter text-md uppercase font-bold">
          Todo (0){" "}
        </h1>
      </div>

      {/* HIER SPÄTER .map() einfügen */}

      {data.boards[0].columns.map((column: any) => (
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

      {/* <Kanbanbox title={"Drama"} subtasksCount={0} />
      <Kanbanbox title={"ostblock"} subtasksCount={0} /> */}
    </div>
  )
}
