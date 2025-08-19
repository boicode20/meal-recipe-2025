import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { handleInput } from './RegisterFunc.js'
import { handleConfirmPass } from './RegisterFunc.js'
const RegisterForm = () => {
  const [user,setUser] = useState({
    fullname:'',
    email:'',
    username:'',
    password:''
  })
  const [confirm,setConfirm] = useState('');

  return (
    <form className='w-full h-auto flex flex-col gap-2' >
        <div className="input-data flex flex-col">
            <label htmlFor="fullname">Fullname</label>
            <input className='border outline-0 w-full h-[36px] rounded-[3px] px-2' type="text" name="fullname" id="fullname" onChange={(e)=>handleInput(e,setUser)}/>
        </div>
        <div className="input-data flex flex-col">
            <label htmlFor="email">Email</label>
            <input className='border outline-0 w-full h-[36px] rounded-[3px] px-2' type="text" name="email" id="email" onChange={(e)=>handleInput(e,setUser)}/>
        </div>
        <div className="input-data flex flex-col">
            <label htmlFor="username">Username</label>
            <input className='border outline-0 w-full h-[36px] rounded-[3px] px-2' type="text" name="username" id="username" onChange={(e)=>handleInput(e,setUser)}/>
        </div>
        <div className="input-data flex flex-col">
            <label htmlFor="password">Password</label>
            <input className='border outline-0 w-full h-[36px] rounded-[3px] px-2' type="password" name="password" id="password" onChange={(e)=>handleInput(e,setUser)}/>
        </div>
        <div className="input-data flex flex-col">
            <label htmlFor="confirm">Confirm password</label>
            <input className='border outline-0 w-full h-[36px] rounded-[3px] px-2' type="password" name="confirm" id="confirm" onChange={(e)=>handleConfirmPass(e,setConfirm)}/>
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