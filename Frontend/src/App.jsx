import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Auth/Login/Login'
import './App.css'
const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App