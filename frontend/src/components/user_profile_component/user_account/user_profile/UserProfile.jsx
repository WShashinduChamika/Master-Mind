import React, { useEffect, useState } from 'react'
import './UserProfile.css'
import { IoEye } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import userPicImg from './img/user_pic.png'


export default function UserProfile(props) {

    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [mobileNo, setMobileNo] = useState()
    const [image, setImage] = useState()
    const [userID, setUserID] = useState()


    const getUser = async (id) => {

        const response = await fetch('/api/user/' + id, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        const json = await response.json()
        if (response.ok) {
            //alert('Success')
            setUserName(json.name)
            setEmail(json.email)
            setMobileNo(json.mobileNo)
            setImage(json.image)
        }

    }

    const getUerID = async() => {
        let data = await localStorage.getItem('user')
        if (data) {
            let parssedData = JSON.parse(data)
            if (parssedData && parssedData.name) {
                setUserID(parssedData.uid)
                props.setUserID(parssedData.uid)
                return userID
            }
        }
        else {
        }
    }
    const handleUserList = () => {

    }

    const handleEditProfile = () => {
        props.setIsUserProfileClicked(!props.isUserProfileClicked)
        props.setIsUserEditClicked(!props.isUserEditClicked)
    }

    useEffect(() => {

        getUerID()
        getUser(userID)
        

        const UserProfile = document.getElementById('user-profile')
        if (props.isUserProfileClicked) {
            UserProfile.classList.remove('user-profile-invisible')
            UserProfile.classList.add('user-profile')
        } else {
            UserProfile.classList.remove('user-profile')
            UserProfile.classList.add('user-profile-invisible')
        }
    })

    return (
        <div className='user-profile' id='user-profile'>
            <div className='user-navigation-title'>User Profile</div>
            <div className='user-path'>User Account / User Profile</div>
            <div className='user-profile-navigation-and-user-profile'>
                <div className='user-profile-navigations'>
                    <div className='user-profile-navigation'>
                        <IoEye className='user-profile-view-icon active-profile-view-icon' size={20} />
                        <div className='user-view-profile-txt active-view-profile-text'>View Profile</div>
                    </div>
                    <div className='user-profile-navigation' onClick={handleEditProfile}>
                        <FaEdit className='user-profile-view-icon' size={20} />
                        <div className='user-view-profile-txt'>Edit Profile</div>
                    </div>
                </div>
                <div className='user-profile-info'>
                    <div className='user-profile-title'>Account Information</div>
                    <div className='user-profile-pic-and-info'>
                        <div className='user-profile-pic'>
                            <div className='user-profile-pic-title'>
                                Profile Picture
                            </div>
                            <div className='user-profile-pic-img'>
                                {!image ?
                                    <div className='default-user-profile'>
                                       S
                                    </div> :
                                    <img src={'http://localhost:4000/images/' + image}></img>
                                }
                            </div>
                        </div>
                        <div className='user-profile-details'>
                            <div className='user-profile-pic-title'>
                                Personal Information
                            </div>
                            <div className='user-profile-info-types'>
                                <div className='user-info-type'>
                                    <div className='user-info-type-title'>Name</div>
                                    <div className='user-info-type-txt'> : {userName}</div>
                                </div>
                                <div className='user-info-type'>
                                    <div className='user-info-type-title'>Email</div>
                                    <div className='user-info-type-txt'> : {email}</div>
                                </div>
                                <div className='user-info-type'>
                                    <div className='user-info-type-title'>Contact Number</div>
                                    <div className='user-info-type-txt'> : {mobileNo}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
