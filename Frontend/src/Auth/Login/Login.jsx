import React from 'react'
import '../auth.css'
import LoginContainer from '../../Components/LoginContainer'
import AuthContainer from '../../Components/AuthContainer'
import AuthHeader from '../../Components/AuthHeader'
import LoginForm from '../AuthForm/LoginForm'
const Login = () => {
  return (
    <LoginContainer>
      <AuthContainer>
        <AuthHeader/>
        <LoginForm/>
      </AuthContainer>
    </LoginContainer>
  )
}

export default Login  