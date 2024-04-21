import React from 'react'
import LoginForm from '../components/authenticate_components/login_form/LoginForm'
import Background from '../components/authenticate_components/Background'

export default function LoginPage() {
  return (
    <div>
      <Background form={<LoginForm></LoginForm>} page={"login"}></Background>
    </div>
  )
}
