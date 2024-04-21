import React, { useState, } from 'react'
import './SignupForm.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [showPassword,setShowPassword] = useState(false)
  const [confirmPassword,setConfirmPassword] = useState('')
  const [showConfirmPasword,setShowConfirmPassword] = useState(false)
  const [error,setError] = useState('')
  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate()

  const hadnleShowpassword = ()=>{
     setShowPassword((showPassword)=>(!showPassword))
  }
  const hadnleShowConfirmpassword = ()=>{
    setShowConfirmPassword((showConfirmPassword)=>(!showConfirmPassword))
 }

 const handleLogin = ()=>{
   navigate('/login')
 }
 const handleSubmit = async(e)=>{
    //alert(name+" "+email+" "+password+" "+confirmPassword)
    await signup(name,email,password,confirmPassword,'end-user')
    e.preventDefault()
 }

 const signup = async (name,email,password,confirmPassword,role)=>{
   setIsLoading(true)
   setError(null)

   const response = await fetch('/api/user/signup',{
     method:'POST',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify({name,email,password,confirmPassword,role})
   })

   const json = await response.json()
   //alert(json)
   console.log(json)
   if(!response.ok){
     setIsLoading(false)
     setError(json.error)
   }

   if(response.ok){
     // save the user to local storage
     localStorage.setItem('user',JSON.stringify(json))

     setIsLoading(false)
     navigate('/login')
   }
 }
  return (
    <div className='signup-form'>
        <p className='signup-title'>Sign Up</p>
        <input 
          type='text'  
          className='signup-input' 
          placeholder='Name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
        >   
        </input>
        <input 
          type='email'  
          className='signup-input' 
          placeholder='Email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        >
        </input>
        <div style={{display:'flex'}}>
           <input 
              type={showPassword?'text':'password'} 
              className='signup-input password' 
              placeholder='Password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            >
            </input>
            <button type='button' className='eye-btn' onClick={hadnleShowpassword}>
               {showPassword? <FaEyeSlash /> : <FaEye />}
            </button>
        </div>
        
        <div style={{display:'flex'}}>
           <input 
              type={showConfirmPasword?'text':'password'} 
              className='signup-input password' 
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
            >
            </input>
            <button type='button' className='eye-btn' onClick={hadnleShowConfirmpassword}>
               {showConfirmPasword? <FaEyeSlash /> : <FaEye />}
            </button>
        </div>
        {error && <div className='error'>{error}</div>}
        <button className='form-btn' onClick={handleSubmit} disabled={isLoading}>Sign up</button>

        <p className='or-text'>Or</p>

        <button className='form-btn disable' onClick={handleLogin}>Login</button>

        <div style={{display:'flex',marginTop:'2vh'}}>
          <input type='checkbox' className='term-check'></input>
          <p className='term-text'>By registering, You  agree with terms &<br></br> conditions & policy</p>
        </div>
    </div>
  )
}
