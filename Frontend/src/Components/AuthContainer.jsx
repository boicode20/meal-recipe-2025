import React from 'react'
import './component.css'
const AuthContainer = ({children}) => {
  return (
    <div className='auth-inner-con w-[400px] px-4 py-8 rounded-2xl bg-[var(--auth-container-bg)] '>
    {children}
    </div>
  )
}

export default AuthContainer