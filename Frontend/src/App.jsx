import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Auth/Login/Login'
import './App.css'
import Register from './Auth/Register/Register'
const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

    </Routes>
   </BrowserRouter>
  )
}

export default App