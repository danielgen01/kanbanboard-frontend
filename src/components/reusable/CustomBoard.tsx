import React from "react"
import boardicon from "../../../assets/icon-board.svg"

type props = {
    name:any
}

const CustomBoard:React.FC<props> = ({name}) => {
  return (
    <button className="flex items-center px-10 py-4 rounded-3xl -ml-5 gap-3 font-bold text-sm  hover:bg-bright-gray duration-200">
      <img src={boardicon} alt="logo" />
      <span className="text-medium-gray hover:text-dark-purple">
        {name}
      </span>
    </button>
  )
}

export default CustomBoard
