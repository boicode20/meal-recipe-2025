import React from 'react'
import '../auth.css'
import Container from '../../Components/LoginContainer'
import AuthContainer from '../../Components/AuthContainer'
import AuthHeader from '../../Components/AuthHeader'
import RegisterForm from '../AuthForm/RegisterForm'
const Register = () => {
  return (
    <Container>
      <AuthContainer>
        <AuthHeader/>
        <RegisterForm/>
      </AuthContainer>
    </Container>
  )
}

export default Register