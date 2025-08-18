import React from 'react'
import './component.css'
const AuthContainer = ({children}) => {
  return (
    <div className='auth-inner-con w-[400px] p-4 rounded-2xl'>
    {children}
    </div>
  )
}

export default AuthContainer