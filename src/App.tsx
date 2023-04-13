import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Board from "./components/Board"
import NewTaskForm from "./components/Forms/NewTaskForm"
import EditTaskForm from "./components/Forms/EditTask/EditTaskForm"

function App() {
  return (
    <div className="app min-h-screen w-screen">
      <Navbar />
      <Board />
      <NewTaskForm />
      <EditTaskForm />
    </div>
  )
}

export default App
