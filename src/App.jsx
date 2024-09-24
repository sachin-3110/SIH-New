import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'  
import Routing from './utils/Routing'
function App() {
  return (
    <div className='w-full h-full'>
      <NavBar/>
      <Routing/>
    </div>
  )
}

export default App
