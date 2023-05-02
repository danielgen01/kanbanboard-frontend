import React from "react"
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

      <svg
        width="15"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onRemove}
        className=" duration-150
         font-bold cursor-pointer 
       text-3xl"
      >
        <g fill="#828FA3" fill-rule="evenodd" className="hover:fill-dark-red">
          <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
          <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
        </g>
      </svg>
    </div>
  )
}
