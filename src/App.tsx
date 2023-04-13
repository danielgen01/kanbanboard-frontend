import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Board from "./components/Board"
import NewTaskForm from "./components/Forms/AddTask/NewTaskForm"
import EditTaskForm from "./components/Forms/EditTask/EditTaskForm"
import AddBoardForm from "./components/Forms/AddNewBoard/AddBoardForm"

function App() {
  return (
    <div className="app min-h-screen w-screen">
      <Navbar />
      <Board />
      {/* <NewTaskForm /> */}
      {/* <EditTaskForm /> */}
      <AddBoardForm />
    </div>
  )
}

export default App
