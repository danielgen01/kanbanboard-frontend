import React from "react"
import crossicon from "../../../../assets/icon-cross.svg"

type props = {
  defaultValue: string
}
export const InputElement: React.FC<props> = ({ defaultValue }) => {
  return (
    <div className="input-element flex justify-between items-center">
      <input
        type="text"
        className="px-5 border-2 border-bright-gray rounded-md h-12 dark:bg-dark-gray dark:border-medium-gray dark:border dark:text-white"
        placeholder="e.g 2"
        defaultValue={defaultValue}
      />
      <img src={crossicon} alt="cross icon" />
    </div>
  )
}
