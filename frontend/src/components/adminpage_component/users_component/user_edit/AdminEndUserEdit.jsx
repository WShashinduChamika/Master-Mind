import React, { useEffect, useState } from 'react'
import { IoEye } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import './AdminEndUserEdit.css'
import Swal from 'sweetalert2';

export default function AdminEndUserEdit(props) {

  const [userID, setUserID] = useState(props.userID)
  const [userName, setUserName] = useState()
  const [userEmail, setUserEmail] = useState()
  const [userMobileNo, setUserMobileNo] = useState()
  const [userRole, setUserRole] = useState()
  const [Password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [file, setFile] = useState(null);
  const [image, setImage] = useState([]);

  const options = [
    'end-user', 'admin'
  ]
  const defaultOption = options[0]

  const getUser = async (id) => {
    const response = await fetch('/api/user/' + id, {
      method: 'GET',
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    const json = await response.json()
    if (response.ok) {
      // console.log(json)
      setUserName(json.name)
      setUserEmail(json.email)
      setUserMobileNo(json.mobileNo)
      setUserRole(json.role)
      setImage(json.image)
    }
  }

  const updateUser = async (id, formData) => {
    try {
      const response = await fetch('/api/user/' + id, {
        method: 'PATCH',
        body: formData
      });
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };


  const updatePasword = async (id, password, confirmPassword) => {
    const response = await fetch('/api/user/password/' + id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, confirmPassword })
    })
    const json = response.json()
    if (response.ok) {
      alert("Suc")
    } else {
      console.log("password")
      console.log(json)
      alert("eror")
    }
  }

  const handleViewProfile = () => {
    props.setIsUserEditClicked(!props.isUserEditClicked)
    props.setIsUserProfileClicked(!props.isUserProfileClicked)
  }

  const handleUserList = () => {
    props.setIsUsersClicked(!props.isUsersClicked)
    props.setIsUserEditClicked(!props.isUserEditClicked)
  }

  const handleSaveChanges = () => {
    const formData = new FormData();
    formData.append('file', file)
    formData.append('name', userName);
    formData.append('email', userEmail)
    // formData.append('password', Password)
    // formData.append('confirmPassword', confirmPassword)
    formData.append('role', userRole)
    formData.append('mobileNo', userMobileNo)
    //console.log(file)
    updateUser(userID, formData)
    Swal.fire({
      title: "Profile Successfully Updated!",
      text: "Your profile successfully upated with new data",
      icon: "success",
      confirmButtonColor: "#359ADE"
    }).then((result) => {
      if (result.isConfirmed) {
        props.setIsUserEditClicked(!props.isUserEditClicked);
        props.setIsUserProfileClicked(!props.isUserProfileClicked);
        window.location.reload(); // Refresh the page if needed
      }
    })
  }

  const handleSavePassword = () => {
    updatePasword(userID, Password, confirmPassword)
    Swal.fire({
      title: "Password Succesfully Changed",
      text: "You can use this account to register courses",
      icon: "success",
      confirmButtonColor: "#359ADE"
    }).then((result) => {
      if (result.isConfirmed) {
        props.setIsUserEditClicked(!props.isUserEditClicked);
        props.setIsUserProfileClicked(!props.isUserProfileClicked);
        //window.location.reload(); // Refresh the page if needed
      }
    })
  }

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
      setFile(event.target.files[0])
    }
  };

  useEffect(() => {

    const user = document.getElementById('admin-end-user-edit-profile')
    if (props.isUserEditClicked) {
      user.classList.remove('admin-end-user-edit-profile-invisible')
      user.classList.add('admin-end-user-edit-profile')
    } else {
      user.classList.remove('admin-end-user-edit-profile')
      user.classList.add('admin-end-user-edit-profile-invisible')
    }
    getUser(userID)
  }, [props.isUserEditClicked])

  return (
    <div className='admin-end-user-edit-profile' id='admin-end-user-edit-profile'>
      <div className='admin-navigation-title'>Users</div>
      <div className='admin-path'>Admin Panel /<span onClick={handleUserList}>User List</span> / User Profile</div>
      <div className='admin-user-profile-navigation-and-end-user-profile'>
        <div className='admin-user-profile-navigations'>
          <div className='admin-user-profile-navigation' onClick={handleViewProfile}>
            <IoEye className='admin-user-profile-view-icon ' size={20} />
            <div className='admin-user-view-profile-txt '>View Profile</div>
          </div>
          <div className='admin-user-profile-navigation'>
            <FaEdit className='admin-user-profile-view-icon active-profile-view-icon' size={20} />
            <div className='admin-user-view-profile-txt active-view-profile-text'>Edit Profile</div>
          </div>
        </div>
        <div className='admin-end-user-profile-info'>
          <div className='admin-end-user-profile-title'>Account Information</div>
          <div className='admin-end-user-edit-profile-pic'>
            <div className='admin-end-user-profile-pic-title'>
              Profile Picture
            </div>
            <div className='admin-end-user-profile-edit-pic-img'>
              {!selectedImage ?
                !image ? <div className='default-user-profile'>
                  {userName[0]}
                </div>
                  : <img src={'http://localhost:4000/images/' + image}></img>
                : <img src={selectedImage}></img>

              }
              <div className='admin-end-user-edit-profile-edit-btns'>
                <input
                  type='file'
                  className='admin-end-user-edit-profile-edit-btn'
                  onChange={handleImageChange}
                  placeholder="Change Picture"
                />
                <label htmlFor="file-upload" className="admin-end-custom-file-upload">
                  Change Picture
                </label>
              </div>
            </div>
          </div>

          <div className='admin-end-user-profile-edit-personal-info'>
            <div className='admin-end-user-profile-pic-title'>
              Personal Information
            </div>
            <div className='admin-end-user-profile-edit-personal-info-row'>
              <div className='admin-end-user-profile-edit-personal-info-row-type'>
                <p>Name</p>
                <input
                  type='text'
                  placeholder={userName}
                  onChange={(e) => setUserName(e.target.value)}
                ></input>
              </div>
              <div className='admin-end-user-profile-edit-personal-info-row-type'>
                <p>Role</p>
                <Dropdown
                  options={options}
                  value={defaultOption}
                  onChange={(option) => setUserRole(option.value)}
                  controlClassName='admin-end-user-profile-edit-personal-info-row-type-dropdown-control'
                  menuClassName='admin-end-user-profile-edit-personal-info-row-type-dropdown-menu'
                  placeholder="Select an option"
                />
              </div>
            </div>
            <div className='admin-end-user-profile-edit-personal-info-row'>
              <div className='admin-end-user-profile-edit-personal-info-row-type'>
                <p>Email</p>
                <input
                  type='text'
                  placeholder={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                ></input>
              </div>
              <div className='admin-end-user-profile-edit-personal-info-row-type'>
                <p>Contact Number</p>
                <input
                  type='text'
                  placeholder={userMobileNo}
                  onChange={(e) => setUserMobileNo(e.target.value)}
                ></input>
              </div>
            </div>
          </div>

          <div className='admin-end-user-profile-edit-save-changes-btn'>
            <button onClick={handleSaveChanges}>Save Changes</button>
          </div>

          <div className='admin-end-user-profile-edit-personal-info'>
            <div className='admin-end-user-profile-pic-title'>
              Change Password
            </div>
            <div className='admin-end-user-profile-edit-personal-info-row'>
              <div className='admin-end-user-profile-edit-personal-info-row-type'>
                <p>New Password</p>
                <input
                  type='text'
                  placeholder='Enter password'
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <div className='admin-end-user-profile-edit-personal-info-row-type'>
                <p>Confirm Password</p>
                <input
                  type='text'
                  placeholder='Enter password again'
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></input>
              </div>
            </div>
          </div>

          <div className='admin-end-user-profile-edit-save-changes-btn'>
            <button onClick={handleSavePassword}>Save Changes</button>
          </div>

        </div>
      </div>
    </div>
  )
}
