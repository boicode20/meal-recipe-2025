import React from 'react'
import '../auth.css'
import Container from '../../Components/LoginContainer'
import AuthContainer from '../../Components/AuthContainer'
import AuthHeader from '../../Components/AuthHeader'
import LoginForm from '../AuthForm/LoginForm'
const Login = () => {
  return (
    <Container>
      <AuthContainer>
        <AuthHeader/>
        <LoginForm/>
      </AuthContainer>
    </Container>
  )
}

export default Login  