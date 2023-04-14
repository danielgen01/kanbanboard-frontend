import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Board from "./components/MainLayout/Board"
import NewTaskForm from "./components/Forms/AddTask/NewTaskForm"
import ViewTaskForm from "./components/Forms/ViewTask/ViewTask"
import AddBoardForm from "./components/Forms/AddNewBoard/AddBoardForm"
import EditBoardForm from "./components/Forms/EditBoard/EditBoard"
import DeleteBoard from "./components/Forms/DeleteBoard/DeleteBoard"
import DeleteTask from "./components/Forms/DeleteTask/DeleteTask"
import Sidebar from "./components/MainLayout/Sidebar"
import EditTaskForm from "./components/Forms/EditTask/EditTaskForm"

function App() {
  return (
    <div className="app min-h-screen md:w-screen grid grid-cols-1 md:grid-cols-6 ">
      <Sidebar />
      <Board />
      <NewTaskForm />
      <ViewTaskForm />
      <AddBoardForm />
      {/* <EditBoardForm /> */}
      {/* <DeleteBoard /> */}
      {/* <DeleteTask /> */}
      {/* <EditTaskForm /> */}
    </div>
  )
}

export default App
