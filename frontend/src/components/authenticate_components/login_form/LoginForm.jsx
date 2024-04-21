import React, { useState } from 'react'
import '../signup_form/SignupForm.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const [uid, setUid] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')

  const hadnleShowpassword = () => {
    setShowPassword((showPassword) => (!showPassword))
  }

  const handleSignup = () => {
    navigate('/signup')
  }
  const handleSubmit = async (e) => {
    //alert(name+" "+email+" "+password+" "+confirmPassword)
    await login(email, password)
    e.preventDefault()
  }

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const json = await response.json()
    console.log(json)
    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }

    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      //console.log(localStorage.getItem('user'))
      //const parssedata = JSON.parse(localStorage.getItem('user'))
      //alert(parssedata.email)
      //  console.log(json.name)
      //  let username = json.name
      //  console.log("User name"+username)
      //  setName(username)
      //  alert(username)
      setRole(json.role)
      alert(json.role)
      setIsLoading(false)
      //const name = {key:username}
      userNavigate(json.role)
    }


  }
  const userNavigate = (role)=>{
     if(role==='end-user'){
       navigate('/')
     }else{
       navigate('/admin')
     }
  }

  return (
    <div className='signup-form'>
      <p className='signup-title' style={{ marginBottom: '15vh', marginTop: '10vh' }}>Sign in</p>

      <input
        type='email'
        className='signup-input'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      >
      </input>
      <div style={{ display: 'flex' }}>
        <input
          type={showPassword ? 'text' : 'password'}
          className='signup-input password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
        </input>
        <button type='button' className='eye-btn' onClick={hadnleShowpassword}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>


      {error && <div className='error'>{error}</div>}
      <button className='form-btn' style={{ marginTop: '5vh' }} onClick={handleSubmit} disabled={isLoading}>Login</button>

      <p className='or-text'>Or</p>

      <button className='form-btn disable' onClick={handleSignup}>Signup</button>

    </div>
  )
}
