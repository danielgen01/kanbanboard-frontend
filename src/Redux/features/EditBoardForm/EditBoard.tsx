import React from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { AddColInput } from "../../../components/reusable/AddColInput"
import { useEditBoard } from "./useEditBoard"

const EditBoardForm = ({ key }: { key: string }) => {
  const {
    data,
    isEditBoardFormOpen,
    currentBoardName,
    columnNames,
    addNewColumn,
    removeColumn,
    boardName,
    setBoardName,
    handleInputChange,
    handleToggleEditBoardForm,
    handleColumnNameChange,
    handleUpdateBoard,
  } = useEditBoard()

  return (
    <>
      <section
        className="transparent-background bg-black/50 fixed h-screen w-screen top-0 left-0 "
        style={{ display: isEditBoardFormOpen ? "block" : "none" }}
        onClick={handleToggleEditBoardForm}
      ></section>
      <div
        className="form-container bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
     min-h-[550px] w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] rounded-md
     dark:bg-dark-gray"
        style={{ display: isEditBoardFormOpen ? "block" : "none" }}
      >
        <div className="form-content flex flex-col px-5 py-5 gap-4">
          <h1 className="font-bold text-xl dark:text-white">Edit Board</h1>
          <label
            htmlFor=""
            className="text-medium-gray font-bold text-sm dark:text-white"
          >
            Board Name
          </label>
          <input
            type="text"
            className="px-5 border-2 border-bright-gray rounded-md h-12 dark:bg-dark-gray dark:border-medium-gray dark:border
             dark:text-white  dark:outline-none dark:focus:border-dark-purple focus:border-dark-purple outline-none"
            placeholder={currentBoardName}
            value={boardName}
            onChange={handleInputChange}
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
            dark:bg-white hover:opacity-70 duration-200"
              onClick={addNewColumn}
            >
              <AiOutlinePlus className="text-dark-purple font-bold" /> Add new
              Column
            </button>
            <button
              className="w-full text-white font-bold bg-dark-purple h-10
               gap-2 rounded-3xl hover:bg-bright-purple duration-200"
              onClick={handleUpdateBoard}
            >
              Save Changes
            </button>
          </section>
        </div>
      </div>
    </>
  )
}

export default EditBoardForm
