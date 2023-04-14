import React, { useState, useEffect } from "react"
import LogoDark from "../../../assets/logo-dark.svg"
import LogoLight from "../../../assets/logo-light.svg"
import boardicon from "../../../assets/icon-board.svg"
import { AiOutlinePlus } from "react-icons/ai"
import iconLight from "../../../assets/icon-light-theme.svg"
import iconDark from "../../../assets/icon-dark-theme.svg"
import iconShowSidebar from "../../../assets/icon-show-sidebar.svg"
import iconHideSidebar from "../../../assets/icon-hide-sidebar.svg"

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  )

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark"
    document.documentElement.classList.toggle("dark", isDark)
    setIsDarkMode(isDark)
  }, [])

  function toggleDarkMode() {
    const newIsDarkMode = !isDarkMode

    document.documentElement.classList.toggle("dark", newIsDarkMode)
    localStorage.setItem("theme", newIsDarkMode ? "dark" : "light")
    setIsDarkMode(newIsDarkMode)
  }
  return (
    <aside className="hidden md:flex flex-col gap-4 min-h-screen py-5 dark:bg-dark-gray">
      <figure className="flex w-full justify-center">
        <img src={LogoLight} alt="" className="hidden dark:block" />
        <img src={LogoDark} alt="" className="block dark:hidden" />
      </figure>
      <h2 className="uppercase px-10 mt-4 text-medium-gray font-bold tracking-widest text-sm">
        all boards (1)
      </h2>

      <section className="boards-list-buttons flex flex-col gap-2">
        <button className="flex items-center px-10 bg-dark-purple py-4 rounded-3xl -ml-5 gap-3 font-bold text-sm">
          <img src={boardicon} alt="icon" />
          <span className="text-white">Platform Launch</span>
        </button>

        <button className="flex items-center px-10 py-4 rounded-3xl -ml-5 gap-3 font-bold text-sm  hover:bg-bright-gray duration-200">
          <img src={boardicon} alt="logo" />
          <span className="text-medium-gray hover:text-dark-purple">
            Blablablaba
          </span>
        </button>

        <button className="flex items-center px-10 py-4 rounded-3xl -ml-5 gap-3 font-bold text-sm  hover:bg-bright-gray duration-200">
          <img src={boardicon} alt="logo" />
          <span className="text-medium-gray hover:text-dark-purple">
            Blablablaba
          </span>
        </button>

        <button className="flex items-center px-10 py-4 rounded-3xl -ml-5 gap-3 font-bold text-sm  hover:bg-bright-gray duration-200">
          <img src={boardicon} alt="logo" className="fill-dark-purple" />
          <span className="flex items-center gap-2 text-dark-purple">
            {" "}
            <AiOutlinePlus /> Create new Board
          </span>
        </button>
      </section>

      <footer className="mt-auto">
        <div className="toggle-theme-container px-5">
          <div className="toggle-theme-content  flex justify-between bg-bright-gray h-10 px-5 items-center dark:bg-dark-black rounded-md">
            <img src={iconLight} alt="icon" className="h-6" />
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer
                ${isDarkMode ? "translate-x-[100%]" : ""} duration-200`}
                onChange={toggleDarkMode}
                checked={isDarkMode}
              />
              <label
                htmlFor="toggle"
                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                  isDarkMode ? "bg-dark-purple" : "bg-gray-300"
                }`}
              ></label>
            </div>

            <img src={iconDark} alt="icon" className="h-6" />
          </div>
        </div>
        <div className="toggle-side-bar-container w-[90%] flex items-center px-10 mt-5 hover:bg-white h-12 cursor-pointer duration-200 rounded-3xl -ml-5">
          <button className="toggle-side-bar-content flex items-center gap-2">
            <img src={iconHideSidebar} alt="icon" className="h-4" />
            <p className="text-medium-gray font-bold text-sm hover:text-dark-purple">Hide Sidebar</p>
          </button>

        </div>
      </footer>
    </aside>
  )
}

export default Sidebar
