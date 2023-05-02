import React, { useEffect, useRef, useState } from "react"
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai"
import { AddColInput } from "../../../components/reusable/AddColInput"

import { useSelector, useDispatch } from "react-redux"
import { toggleAddBoardForm } from "./NewBoardFormSlice"
import { useAppDispatch, useAppSelector } from "../../store"
import { RootState } from "../../rootReducer"
import { addBoard } from "../Data/DataSlice"
import { setCurrentBoardName } from "../currentBoard/currentBoardSlice"

type AddBoardFormProps = {
  onBoardAdded: () => void
}

const AddBoardForm: React.FC<AddBoardFormProps> = ({ onBoardAdded }) => {
  const data = useAppSelector((state: RootState) => state.data)
  const [boardTitle, setBoardTitle] = useState<string>("New Board")
  const [columnNames, setColumnNames] = useState<
    Array<{ id: number; name: string }>
  >([
    { id: Math.max(Math.random() * 6_000_000), name: "Todo" },
    { id: Math.max(Math.random() * 6_000_000), name: "Doing" },
    { id: Math.max(Math.random() * 6_000_000), name: "Done" },
  ])

  const currentBoardName = useAppSelector(
    (state: RootState) => state.currentBoardName.currentBoardName
  )

 

  function addNewColumn() {
    const newId =
      columnNames.length > 0 ? columnNames[columnNames.length - 1].id + 1 : 1
    setColumnNames([...columnNames, { id: newId, name: "" }])
  }

  function removeColumn(id: number) {
    setColumnNames(columnNames.filter((column) => column.id !== id))
  }

  const isBoardFormOpen = useAppSelector(
    (state: RootState) => state.newboardform.isBoardFormOpen
  )

  const dispatch = useAppDispatch()

  const handleToggleAddBoardForm = () => {
    dispatch(toggleAddBoardForm())
    setBoardTitle("New Board")
    setColumnNames([
      { id: 1, name: "Todo" },
      { id: 2, name: "Doing" },
      { id: 3, name: "Done" },
    ])
  }

  const addNewBoard = () => {
    let columns = columnNames.map((column) => ({
      name: column.name,
      tasks: [],
      id:column.id
    }))
    const boardExists = data.boards.find((board) => board.name === boardTitle)
    if (boardExists) {
      alert("Board with the same name already exists")
      return
    }

    dispatch(
      addBoard({
        name: boardTitle,
        columns: columns,
      })
    )

    handleToggleAddBoardForm()

    dispatch(setCurrentBoardName(boardTitle))

    setBoardTitle("New Board")
    setColumnNames([
      { id: 1, name: "Todo" },
      { id: 2, name: "Doing" },
      { id: 3, name: "Done" },
    ])
    onBoardAdded()
  }

  function handleColumnNameChange(id: number, value: string) {
    setColumnNames((prevColumnNames) => {
      const newColumnNames = prevColumnNames.map((column) =>
        column.id === id ? { ...column, name: value } : column
      )
      return newColumnNames
    })
  }

  return (
    <>
      <section
        className="transparent-background bg-black/50 absolute h-screen w-screen top-0 left-0 "
        style={{ display: isBoardFormOpen ? "block" : "none" }}
        onClick={handleToggleAddBoardForm}
      ></section>
      <div
        className="form-container bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
     min-h-[550px] w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] rounded-md
     dark:bg-dark-gray"
        style={{ display: isBoardFormOpen ? "block" : "none" }}
      >
        <div className="form-content flex flex-col px-5 py-5 gap-4">
          <div className="flex justify-between">
            <h1 className="font-bold text-xl dark:text-white">Add new board</h1>
            <AiOutlineClose
              className="text-medium-gray dark:text-white cursor-pointer"
              onClick={handleToggleAddBoardForm}
            />
          </div>
          <label
            htmlFor=""
            className="text-medium-gray font-bold text-sm dark:text-white"
          >
            Board Name
          </label>
          <input
            type="text"
            className="px-5 border-2 border-bright-gray rounded-md h-12
            outline-white
             dark:bg-dark-gray dark:border-medium-gray
              dark:border dark:text-white dark:outline-none dark:focus:border-dark-purple
               focus:border-dark-purple outline-none"
            placeholder="e.g Web Design"
            onChange={(e) => setBoardTitle(e.target.value)}
          />
          <section className="board-columns flex flex-col gap-2">
            <label
              htmlFor=""
              className="text-sm text-medium-gray font-bold dark:text-white"
            >
              Board Columns
            </label>
            {columnNames.map((column) => (
              <AddColInput
                key={column.id}
                defaultValue={column.name}
                onRemove={() => removeColumn(column.id)}
                onInputChange={(event) =>
                  handleColumnNameChange(column.id, event.target.value)
                }
              />
            ))}
          </section>
          <section className="buttons flex flex-col gap-5">
            <button
              className="flex items-center justify-center w-full text-dark-purple font-bold bg-bright-gray h-10 gap-2 rounded-3xl 
            dark:bg-white hover:opacity-70 duration-150"
              onClick={addNewColumn}
            >
              <AiOutlinePlus className="text-dark-purple font-bold" /> Add new
              Column
            </button>
            <button
              className="w-full text-white font-bold bg-dark-purple
               h-10 gap-2 rounded-3xl  hover:bg-bright-purple duration-200"
              onClick={addNewBoard}
            >
              Create new Board
            </button>
          </section>
        </div>
      </div>
    </>
  )
}

export default AddBoardForm
