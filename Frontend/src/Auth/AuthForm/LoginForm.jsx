import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";

const LoginForm = () => {
  const [show,setShow] = useState(false)
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
            <input className='border outline-0 w-full h-[36px] rounded-[3px] pl-2 pr-10' type={show?"text":"password"} name='password' id='password' />
            {
              show?<FaRegEye className='absolute right-3 cursor-pointer' onClick={()=>setShow(!show)}/>:<FaRegEyeSlash className='absolute right-3 cursor-pointer' onClick={()=>setShow(!show)} />
            }

          </div>
        </div>
        <Link className='text-[.9rem] underline'><p>Forgot password?</p></Link>
        <button className='login-btn w-full h-[37px] bg-[var(--login-btn)] rounded-[3px] text-[#fff] font-semibold cursor-pointer' type='submit'>Login</button>
        <div className="or flex w-full h-auto items-center  gap-1">
          <span className='w-full h-[1px] bg-[#969696]'></span>
          <p className='text-[.8rem] mt-[-3px]'>or</p>
          <span className='w-full h-[1px] bg-[#969696]'></span>
        </div>
        <Link to={'/register'}><button className='register-btn w-full h-[37px] bg-[var(--register-btn)] rounded-[3px] text-[#fff] font-semibold cursor-pointer' type='submit'>Register</button></Link>
    </form>
  )
}

export default LoginForm