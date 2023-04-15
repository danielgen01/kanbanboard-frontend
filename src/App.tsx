import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Board from "./components/MainLayout/Board"
import NewTaskForm from "./Redux/features/NewTaskForm/NewTaskForm"
import ViewTaskForm from "./Redux/features/ViewTaskForm/ViewTask"
import AddBoardForm from "./Redux/features/NewBoardForm/AddBoardForm"
import EditBoardForm from "./Redux/features/EditBoardForm/EditBoard"
import DeleteBoard from "./Redux/features/DeleteBoardForm/DeleteBoard"
import DeleteTask from "./Redux/features/DeletTaskForm/DeleteTask"
import Sidebar from "./components/MainLayout/Sidebar"
import EditTaskForm from "./Redux/features/EditTaskForm/EditTaskForm"

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
      <EditTaskForm />
    </div>
  )
}

export default App
