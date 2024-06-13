import React, { useEffect, useState } from 'react'
import './UserTopBar.css'
import { FaBars } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function UserTopBar(props) {

  const [userName, setUserName] = useState()
  const [image, setImage] = useState()
  const [userID,setUserID] = useState()
  const navigate = useNavigate()

  const getUser = async (id) => {

    const response = await fetch('/api/user/' + id, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    const json = await response.json()
    if (response.ok) {
      console.log(json)
      setImage(json.image)
    } 

  }
  const getUserDataFromLocalStorage = ()=>{
    let data = localStorage.getItem('user')
    if (data) {
      let parssedData = JSON.parse(data)
      if (parssedData && parssedData.name) {
        let userName = parssedData.name
        setUserName(userName)
        setUserID(parssedData.uid)
        console.log(userName)
      }
    }
    else {
      setUserName('')
    }
  }

  useEffect(() => {
    getUserDataFromLocalStorage()
  }, [])

  useEffect(()=>{
     if(userID){
      getUser(userID)
     }
  },[userID,props.isUserUpdated])

  const goHome = () => {
    navigate('/')
  }

  return (
    <div className='user-top-bar'>
      <MdHome className='user-top-bar-home' size={22} onClick={goHome}></MdHome>
      {image ?
        <img src={'http://localhost:4000/images/' + image}></img>
        : <div className='user-top-bar-user-profile'>
          {userName ? userName[0] : ''}
        </div>
      }
    </div>
  )
}
