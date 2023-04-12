import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Board from './components/Board'
import NewTaskForm from './components/NewTaskForm'

function App() {
  

  return (
   <div className='app min-h-screen w-screen'>
   <Navbar />
   <Board />
   <NewTaskForm />
   </div>
  )
}

export default App
