import React from 'react'
import {Link} from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";

const LoginForm = () => {
  return (
    <form className='w-full h-auto flex flex-col gap-2' >
        <div className="input-data flex flex-col ">
          <label htmlFor="username">Username</label>
          <div className="input-parent w-full relative flex items-center">
            <input className='border outline-0 w-full h-[36px] rounded-[3px] pl-2 pr-10' type="text" name='username' id='username' />
            <FaRegUser className='absolute right-3'/>
          </div>
        </div>
        <div className="input-data flex flex-col ">
          <label htmlFor="password">Password</label>
          <div className="input-parent w-full relative flex items-center">
            <input className='border outline-0 w-full h-[36px] rounded-[3px] pl-2 pr-10' type="password" name='password' id='password' />
            <FaRegEyeSlash className='absolute right-3 cursor-pointer'/>

          </div>
        </div>
        <Link className='text-[.9rem] underline'><p>Forgot password?</p></Link>
        <button className='login-btn w-full h-[37px] bg-[var(--login-btn)] rounded-[3px] text-[#fff] font-semibold cursor-pointer' type='submit'>Login</button>
    </form>
  )
}

export default LoginForm