import React, { useEffect, useState } from 'react';
import './UserEdit.css';
import { IoEye } from 'react-icons/io5';
import { FaEdit } from 'react-icons/fa';
import userPicImg from './img/user_pic.png';
import 'react-dropdown/style.css';
import Swal from 'sweetalert2';

export default function UserEdit(props) {
    const [userID, setUserID] = useState(props.userID);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMobileNo, setUserMobileNo] = useState('');
    const [userRole, setUserRole] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [file, setFile] = useState(null);
    const [image, setImage] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const options = ['end-user', 'admin'];
    const defaultOption = options[0];

    const getUser = async (id) => {
        const response = await fetch('/api/user/' + id, {
            method: 'GET',
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        const json = await response.json();
        if (response.ok) {
            setUserName(json.name);
            setUserEmail(json.email);
            setUserMobileNo(json.mobileNo);
            setUserRole(json.role);
            setImage(json.image);
        }
    };

    const updateUser = async (id, formData) => {
        try {
            const response = await fetch('/api/user/' + id, {
                method: 'PATCH',
                body: formData,
            });
            return response.ok;
        } catch (error) {
            console.error('Fetch error:', error);
            return false;
        }
    };

    const updatePassword = async (id, password, confirmPassword) => {
        const response = await fetch('/api/user/password/' + id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password, confirmPassword }),
        });
        const json = await response.json();
        return response.ok;
    };

    const handleViewProfile = () => {
        props.setIsUserEditClicked(!props.isUserEditClicked);
        props.setIsUserProfileClicked(!props.isUserProfileClicked);
    };

    const handleSaveChanges = async () => {

        const formData = new FormData();
        if (file) {
            formData.append('file', file);
        }
        formData.append('name', userName);
        formData.append('email', userEmail);
        formData.append('role', userRole);
        formData.append('mobileNo', userMobileNo);

        const success = await updateUser(userID, formData);
        if (success) {
            Swal.fire({
                title: "Profile Successfully Updated!",
                text: "Your profile successfully updated with new data",
                icon: "success",
                confirmButtonColor: "#359ADE",
            }).then((result) => {
                if (result.isConfirmed) {
                    props.setIsUserEditClicked(!props.isUserEditClicked);
                    props.setIsUserProfileClicked(!props.isUserProfileClicked);
                    props.setIsUserUpdated(!props.isUserUpdated)
                    //window.location.reload(); // Refresh the page if needed
                }
            });
        }
    };

    const handleSavePassword = async () => {
        const success = await updatePassword(userID, password, confirmPassword);
        if (success) {
            Swal.fire({
                title: "Password Successfully Changed",
                text: "You can use this account to register courses",
                icon: "success",
                confirmButtonColor: "#359ADE",
            }).then((result) => {
                if (result.isConfirmed) {
                    props.setIsUserEditClicked(!props.isUserEditClicked);
                    props.setIsUserProfileClicked(!props.isUserProfileClicked);
                    props.setIsUserUpdated(!props.isUserUpdated)
                    //window.location.reload(); // Refresh the page if needed
                }
            });
        } else {
            Swal.fire({
                title: "Error",
                text: "There was an error updating your password. Please try again.",
                icon: "error",
                confirmButtonColor: "#359ADE",
            });
        }
    };

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
            setFile(event.target.files[0]);
        }
    };

    useEffect(() => {
        const user = document.getElementById('user-edit');
        if (props.isUserEditClicked) {
            user.classList.remove('user-edit-invisible');
            user.classList.add('user-edit');
        } else {
            user.classList.remove('user-edit');
            user.classList.add('user-edit-invisible');
        }
        getUser(userID);
    }, [props.isUserEditClicked, userID]);


    return (
        <div className='user-edit' id='user-edit'>
            <div className='user-navigation-title'>User Profile</div>
            <div className='user-path'>User Account / User Profile</div>
            <div className='user-profile-navigation-and-user-profile'>
                <div className='user-profile-navigations'>
                    <div className='user-profile-navigation'>
                        <IoEye className='user-profile-view-icon' size={20} />
                        <div className='user-view-profile-txt' onClick={handleViewProfile}>View Profile</div>
                    </div>
                    <div className='user-profile-navigation'>
                        <FaEdit className='user-profile-view-icon active-profile-view-icon' size={20} />
                        <div className='user-view-profile-txt active-view-profile-text'>Edit Profile</div>
                    </div>
                </div>
                <div className='user-edit-info'>
                    <div className='user-edit-title'>Account Information</div>
                    <div className='user-edit-profile-pic'>
                        <div className='user-edit-profile-pic-title'>Profile Picture</div>
                        <div className='user-edit-profile-pic-img'>
                            {!selectedImage
                                ? !image
                                    ? <div className='default-user-profile'>{userName[0]}</div>
                                    : <img src={'http://localhost:4000/images/' + image} alt='Profile' />
                                : <img src={selectedImage} alt='Selected Profile' />
                            }
                            <div className='user-edit-profile-edit-btns'>
                                <input
                                    type='file'
                                    className='user-edit-profile-edit-btn'
                                    onChange={handleImageChange}
                                    placeholder="Change Picture"
                                />
                                <label htmlFor="file-upload" className="custom-file-upload">
                                    Change Picture
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='user-edit-profile-details'>
                        <div className='admin-end-user-profile-pic-title'>Personal Information</div>
                        <div className='user-edit-profile-edit-personal-info-row'>
                            <div className='user-edit-profile-edit-personal-info-row-type'>
                                <p>Name</p>
                                <input
                                    type='text'
                                    placeholder={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='user-edit-profile-edit-personal-info-row'>
                            <div className='user-edit-profile-edit-personal-info-row-type'>
                                <p>Email</p>
                                <input
                                    type='text'
                                    placeholder={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                />
                            </div>
                            <div className='user-edit-profile-edit-personal-info-row-type'>
                                <p>Contact Number</p>
                                <input
                                    type='text'
                                    placeholder={userMobileNo}
                                    onChange={(e) => setUserMobileNo(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='user-edit-profile-edit-save-changes-btn'>
                        <button onClick={handleSaveChanges}>Save Changes</button>
                    </div>

                    <div className='user-edit-profile-details' style={{ marginTop: '3rem' }}>
                        <div className='user-edit-profile-pic-title'>Change Password</div>
                        <div className='user-edit-profile-edit-personal-info-row'>
                            <div className='user-edit-profile-edit-personal-info-row-type'>
                                <p>New Password</p>
                                <input
                                    type='text'
                                    placeholder='Enter password'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='user-edit-profile-edit-personal-info-row-type'>
                                <p>Confirm Password</p>
                                <input
                                    type='text'
                                    placeholder='Enter password again'
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='user-edit-profile-edit-save-changes-btn'>
                        <button onClick={handleSavePassword}>Save Changes</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
