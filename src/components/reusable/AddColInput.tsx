import React from "react"
import crossicon from "../../../assets/icon-cross.svg"

type props = {
  defaultValue: string
}
export const AddColInput: React.FC<props> = ({ defaultValue }) => {
  return (
    <div className="input-element flex justify-between items-center gap-2">
      <input
        type="text"
        className="px-5 border-2 border-bright-gray rounded-md h-12 dark:bg-dark-gray dark:border-medium-gray dark:border dark:text-white font-bold
        w-full"
        placeholder="e.g 2"
        defaultValue={defaultValue}
      />
      <img src={crossicon} alt="cross icon" />
    </div>
  )
}