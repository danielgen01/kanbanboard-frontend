import React from "react"

type props = {
  title:string
}

export const Subtask:React.FC<props> = ({title}) => {
  return (
    <div
      className="subtask flex items-center gap-2 w-full bg-bright-gray min-h-[50px] rounded-md px-3 hover:bg-bright-purple>
    dark:bg-dark-black"
    >
      <input type="checkbox" name="check-task" id="check-task" className="" />
      <span className="text-sm text-black dark:text-white font-bold">
       {title}
      </span>
    </div>
  )
}
