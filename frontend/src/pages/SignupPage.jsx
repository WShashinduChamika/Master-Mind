import React from 'react'
import SignupForm from '../components/authenticate_components/signup_form/SignupForm'
import Background from '../components/authenticate_components/Background'

export default function SignupPage() {
  return (
    <div>
      <Background form={<SignupForm></SignupForm>}></Background>
    </div>
  )
}
