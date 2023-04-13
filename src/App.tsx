import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Board from "./components/MainLayout/Board"
import NewTaskForm from "./components/Forms/AddTask/NewTaskForm"
import EditTaskForm from "./components/Forms/EditTask/EditTaskForm"
import AddBoardForm from "./components/Forms/AddNewBoard/AddBoardForm"
import EditBoardForm from "./components/Forms/EditBoard/EditBoard"
import DeleteBoard from "./components/Forms/DeleteBoard/DeleteBoard"
import DeleteTask from "./components/Forms/DeleteTask/DeleteTask"
import Sidebar from "./components/MainLayout/Sidebar"

function App() {
  return (
    <div className="app min-h-screen w-screen grid grid-cols-1 md:grid-cols-5">
      {/* <Navbar /> */}
      <Sidebar />
      <Board />
      {/* <NewTaskForm /> */}
      {/* <EditTaskForm /> */}
      {/* <AddBoardForm /> */}
      {/* <EditBoardForm /> */}
      {/* <DeleteBoard /> */}
      {/* <DeleteTask /> */}
    </div>
  )
}

export default App
