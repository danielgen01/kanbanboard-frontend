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
import { useAppSelector } from "./Redux/store"
import { RootState } from "./Redux/rootReducer"

function App() {
  const [boardFormKey, setBoardFormKey] = useState(0)
  

  const handleBoardAdded = () => {
    setBoardFormKey((prevKey) => prevKey + 1)
  }

 
  const currentBoardName = useAppSelector(
    (state: RootState) => state.currentBoardName.currentBoardName
  )

  const currentTask = useAppSelector(
    (state: RootState) => state.data.activeTask
  )

  return (
    <div className="app  grid grid-cols-1 md:grid-cols-6 ">
      <Sidebar />
      <Board />
      <NewTaskForm />
      <ViewTaskForm />
      <AddBoardForm key={boardFormKey} onBoardAdded={handleBoardAdded} />
      <EditBoardForm key={currentBoardName} />
      <DeleteBoard />
      <DeleteTask />
      <EditTaskForm key={currentTask.title}/>
    </div>
  )
}

export default App
