import React from 'react'
import { GiHotMeal } from "react-icons/gi";

const AuthHeader = () => {
  return (
    <div className='auth-header w-full h-auto'>
        <div className="auth-logo w-full flex items-center justify-center flex-col text-center gap-1">
            <div className="logo text-center text-4xl">
              <GiHotMeal/>
            </div>
            <div className="auth-logo-name text-2xl">
              <h1>Lets Cook</h1>
            </div>
        </div>
    </div>
  )
}

export default AuthHeader