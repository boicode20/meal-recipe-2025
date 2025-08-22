import React from 'react'

const Container = ({children}) => {
  return (
    <div className='auth-parent-container w-full h-screen flex items-center justify-center'>
      {children}  
    </div>
  )
}

export default Container