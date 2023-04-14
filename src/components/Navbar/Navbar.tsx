import React from "react"
import boardicon from "../../assets/logo-light.svg"
import darkboardicon from "../../assets/logo-dark.svg"
import logomobile from "../../../assets/logo-mobile.svg"
import chevrondown from "../../../assets/icon-chevron-down.svg"
import addicon from "../../../assets/icon-add-task-mobile.svg"
import threepointsicon from "../../../assets/icon-vertical-ellipsis.svg"

const Navbar = () => {
  return (
    <nav
      className="h-20 shadow-sm nav-bar-ctn w-screen md:w-auto md:border-b-[1px] border-medium-gray border-none
     dark:bg-dark-gray px-5"
    >
      <div className="navbar-contentn px-5 flex  items-center w-full h-full">
        <div className="logo-ctn">
          <img src={logomobile} className="h-8 md:hidden" alt="logo" />
        </div>
        <div className="chosen-board ml-2 flex items-center gap-2">
          <h1
            className="font-bold text-lg
           dark:text-white"
          >
            Platform Launch
          </h1>
          <img src={chevrondown} className="h-2" alt="chevron down" />
        </div>
        <div className="top-right-icons ml-auto flex  items-center gap-5">
          <button className="add-btn flex bg-dark-purple py-3 px-5 rounded-2xl items-center gap-2 text-white font-bold">
            <img
              src={addicon}
              alt="addicon"
              className=""
            />
            <span className="font-boldtext-white text-sm hidden md:block">Add New Task</span>
          </button>
          <div className="three-points-ellipsis">
            <img src={threepointsicon} alt="ellipsis" className="" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
