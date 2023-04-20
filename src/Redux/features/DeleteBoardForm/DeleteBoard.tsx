import React from "react"

import { toggleDeleteBoardForm } from "./DeleteBoardFormSlice"
import { useAppDispatch, useAppSelector } from "../../store"
import { RootState } from "../../rootReducer"
import data from "../../../../data.json"

const DeleteBoard: React.FC = () => {
  const dispatch = useAppDispatch()

  const isDeleteBoardFormOpen = useAppSelector(
    (state: RootState) => state.deleteBoardForm.isDeleteBoardFormOpen
  )

  // const currentBoardName = useAppSelector(
  //   (state: RootState) => state.currentBoard.currentBoard
  // );
  
  // const deleteCurrentBoard = () => {
  //   const updatedBoards = data.boards.filter(
  //     (board: any) => board.name !== currentBoardName
  //   );
  //   const newData = { ...data, boards: updatedBoards };
  //   console.log(newData);
  //   // hier können Sie newData speichern oder verwenden
  // };
  
  

  const handleToggleDeleteBoardForm = () => {
    dispatch(toggleDeleteBoardForm())
  }

  return (
    <>
      <section
        className="transparent-background bg-black/50 absolute top-0 left-0 h-screen w-screen"
        onClick={handleToggleDeleteBoardForm}
        style={{ display: isDeleteBoardFormOpen ? "block" : "none" }}
      >
        {" "}
      </section>
      <div
        className="delete-box px-5 min-h-[250px] bg-white dark:bg-dark-gray  w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] 
      fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md"
        style={{ display: isDeleteBoardFormOpen ? "block" : "none" }}
      >
        <div className="content py-5 px-5 flex flex-col gap-5">
          <h1 className="text-lg  text-dark-red font-bold">
            Delete this Board?
          </h1>
          <p className="text-medium-gray leading-6 font-bold text-sm">
            Are you sure you want to delete the boardtitle board? This action
            will remove all columns and tasks and cannot be reversed.
          </p>
          <div className="button flex flex-col gap-3 lg:grid lg:grid-cols-2">
            <button
              className="bg-dark-red text-white font-bold py-2 px-4 rounded-3xl hover:bg-bright-red duration-100"
              type="button"
              // onClick={deleteCurrentBoard}
            >
              Delete
            </button>
            <button
               className=" bg-bright-gray dark:bg-white text-dark-purple font-bold py-2 px-4 rounded-3xl hover:bg-[#F4F7FD] dark:hover:bg-white duration-100"
              type="button"
              onClick={handleToggleDeleteBoardForm}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteBoard
