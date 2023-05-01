import React from "react"
import crossicon from "../../../assets/icon-cross.svg"
import { RxCross1 } from "react-icons/rx"
type props = {
  defaultValue: string
  onRemove: () => void
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const AddColInput: React.FC<props> = ({
  defaultValue,
  onRemove,
  onInputChange,
}) => {
  return (
    <div className="input-element flex justify-between items-center gap-2">
      <input
        type="text"
        className="px-5 border-2 border-bright-gray rounded-md h-12 dark:bg-dark-gray dark:border-medium-gray dark:border dark:text-white font-bold
        w-full  dark:outline-none dark:focus:border-dark-purple"
        placeholder="e.g 2"
        defaultValue={defaultValue}
        onChange={onInputChange}
      />

      <RxCross1
        onClick={onRemove}
        className="text-dark-red font-bold cursor-pointer
       text-3xl"
      />
    </div>
  )
}
