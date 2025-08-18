import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  return (
    <form className='w-full h-auto flex flex-col gap-2' >
        <div className="input-data flex flex-col">
            <label htmlFor="fullname">Fullname</label>
            <input className='border outline-0 w-full h-[36px] rounded-[3px] px-2' type="text" name="fullname" id="fullname" />
        </div>
        <div className="input-data flex flex-col">
            <label htmlFor="email">Email</label>
            <input className='border outline-0 w-full h-[36px] rounded-[3px] px-2' type="text" name="email" id="email" />
        </div>
        <div className="input-data flex flex-col">
            <label htmlFor="username">Username</label>
            <input className='border outline-0 w-full h-[36px] rounded-[3px] px-2' type="text" name="username" id="username" />
        </div>
        <div className="input-data flex flex-col">
            <label htmlFor="password">Password</label>
            <input className='border outline-0 w-full h-[36px] rounded-[3px] px-2' type="password" name="password" id="password" />
        </div>
        <div className="input-data flex flex-col">
            <label htmlFor="confirm">Confirm password</label>
            <input className='border outline-0 w-full h-[36px] rounded-[3px] px-2' type="password" name="confirm" id="confirm" />
        </div>
        <button className='register-btn w-full h-[37px] bg-[var(--register-btn)] rounded-[3px] text-[#fff] font-semibold cursor-pointer' type='submit'>Register</button>
        <div className="or flex w-full h-auto items-center  gap-1">
          <span className='w-full h-[1px] bg-[#969696]'></span>
          <p className='text-[.8rem] mt-[-3px]'>or</p>
          <span className='w-full h-[1px] bg-[#969696]'></span>
        </div>
        <Link to={'/'}><button className='login-btn w-full h-[37px] bg-[var(--login-btn)] rounded-[3px] text-[#fff] font-semibold cursor-pointer' type='submit'>Login</button></Link>
    </form>
  )
}

export default RegisterForm