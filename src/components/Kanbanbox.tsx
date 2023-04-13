import React from "react"

type props = {
  title: string
  subtasksCount: number
}

export const Kanbanbox: React.FC<props> = ({ title, subtasksCount }) => {
  return (
    <div
      className="kanbanbox h-28 w-full md:w-[95%] bg-white rounded-md flex flex-col items-start justify-center shadow-md gap-2 px-5
          dark:bg-dark-gray"
    >
      <h1
        className="text-black font-bold text-xl 
            dark:text-white"
      >
        {title}
      </h1>
      <p className="text-medium-gray font-bold">
        0 of {subtasksCount} subtasks
      </p>
    </div>
  )
}
