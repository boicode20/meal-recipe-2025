import React from 'react'

const LoginForm = () => {
  return (
    <form className='w-full h-auto flex flex-col gap-2' >
        <div className="input-data flex flex-col ">
          <label htmlFor="username">Username</label>
          <input className='border outline-0 w-fulll h-[36px] rounded-[3px] px-2' type="text" name='username' id='username' />
        </div>
        <div className="input-data flex flex-col ">
          <label htmlFor="password">Password</label>
          <input className='border outline-0 w-fulll h-[36px] rounded-[3px] px-2' type="password" name='password' id='password' />
        </div>
        <button className='w-full h-[36px] bg-[var(--login-btn)] rounded-[3px] text-[#fff]' type='submit'>Login</button>
    </form>
  )
}

export default LoginForm