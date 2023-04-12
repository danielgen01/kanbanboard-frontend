import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Board from './components/Board'

function App() {
  

  return (
   <div className='app min-h-screen w-screen'>
   <Navbar />
   <Board />
   </div>
  )
}

export default App
