import React, { useEffect, useState } from "react"
import iconLight from "../../../assets/icon-light-theme.svg"
import iconDark from "../../../assets/icon-dark-theme.svg"

export const ToggleTheme: React.FC = ({}) => {
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
    <div className="toggle-theme-container px-5 w-full">
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
  )
}
