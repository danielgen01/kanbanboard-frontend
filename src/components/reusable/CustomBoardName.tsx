import React, { useEffect } from "react"
import boardicon from "../../../assets/icon-board.svg"
import { setCurrentBoard } from "../../Redux/features/currentBoard/currentBoardSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../Redux/rootReducer"

type props = {
  name: any
}

const CustomBoardName: React.FC<props> = ({ name }) => {
  const dispatch = useDispatch()


  const changeCurrentBoard = (name: string) => {
    dispatch(setCurrentBoard(name))
    
  }

  return (
    <button
      className="flex items-center px-10 py-4 rounded-3xl -ml-5 gap-3 
    font-bold text-sm  hover:bg-bright-gray duration-200
     text-medium-gray hover:text-dark-purple"
      onClick={() => changeCurrentBoard(name)}
    >
      <img src={boardicon} alt="logo" />
      <span className="">{name}</span>
    </button>
  )
}

export default CustomBoardName