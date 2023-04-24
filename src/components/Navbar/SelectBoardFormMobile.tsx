import React, { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../Redux/store"
import { RootState } from "../../Redux/rootReducer"
import { AiOutlinePlus } from "react-icons/ai"
import boardicon from "../../../assets/icon-board.svg"
import { toggleAddBoardForm } from "../../Redux/features/NewBoardForm/NewBoardFormSlice"
import { setCurrentBoardName } from "../../Redux/features/currentBoard/currentBoardSlice"

type props = {
  isSelectBoardOpen: boolean
  setIsSelectBoardOpen: any
}

const SelectBoardFormMobile: React.FC<props> = ({
  isSelectBoardOpen,
  setIsSelectBoardOpen,
}) => {
  const data = useAppSelector((state: RootState) => state.data)

  const dispatch = useAppDispatch()

  return (
    <div
      className={`boards-dropdown-mobile  
      bg-darkest-black w-60 min-h-[200px]
       rounded-3xl absolute px-2 ${
         isSelectBoardOpen ? "block" : "hidden"
       } md:hidden`}
    >
      <div
        className="flex flex-col justify-center
         w-full items-center gap-10 py-2"
      >
        {data.boards.map((board) => (
          <div
            key={board.name}
            className="flex justify-center gap-5 w-full"
            onClick={() => {
              dispatch(setCurrentBoardName(board.name))
              setIsSelectBoardOpen(!isSelectBoardOpen)
            }}
          >
            <img src={boardicon} alt="logo" className="fill-dark-purple" />
            <button className="text-white font-bold">{board.name}</button>
          </div>
        ))}
        <button
          className="flex items-center px-10 py-4 rounded-3xl -ml-5 gap-3
         font-bold text-sm"
          onClick={() => dispatch(toggleAddBoardForm())}
        >
          <img src={boardicon} alt="logo" className="fill-dark-purple" />
          <span className="flex items-center gap-2 text-dark-purple">
            {" "}
            <AiOutlinePlus /> Create new Board
          </span>
        </button>
      </div>
    </div>
  )
}

export default SelectBoardFormMobile
