import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { HiDotsHorizontal } from 'react-icons/hi';
import './AdminUsers.css';
import Swal from 'sweetalert2';

export default function AdminUsers(props) {

  const [userList, setUserList] = useState([])
  const [userID, setUserID] = useState()
  const [searchQuery, setSearchQuery] = useState('')
  const [isDeleted, setIsDeleted] = useState(false)

  const getUserList = async () => {
    const response = await fetch('/api/user/', {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    });
    const json = await response.json();
    if (response.ok) {
      setUserList(json);
    }
  };

  const handleView = (id) => {
    props.setUserID(id);
    props.setIsUsersClicked(!props.isUsersClicked);
    props.setIsUserProfileClicked(!props.isUserProfileClicked);
  };

  const handleEdit = (id) => {
    props.setUserID(id);
    props.setIsUsersClicked(!props.isUsersClicked);
    props.setIsUserEditClicked(!props.isUserEditClicked);
  };

  const handleDelete = (id) => {
    deleteUser(id)
  };

  const handleDeleteAlert = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id)
      }
    })
  }

  const deleteUser = async (id) => {

    const response = await fetch('/api/user/' + id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      setIsDeleted(!isDeleted)
    } else {
      //alert('error')
    }
  }

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  }

  useEffect(() => {
    getUserList();
    const adminUsers = document.getElementById('admin-users')
    if (props.isUsersClicked) {
      adminUsers.classList.remove('admin-users-invisible')
      adminUsers.classList.add('admin-users')
    } else {
      adminUsers.classList.remove('admin-users')
      adminUsers.classList.add('admin-users-invisible')
    }
  }, [props.isUsersClicked, isDeleted])

  // Filter user list based on search query
  const filteredUserList = userList.filter((user) =>
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='admin-users-invisible' id='admin-users'>
      <div className='admin-navigation-title'>Users</div>
      <div className='admin-path'>Admin Panel / User List</div>
      <div className='amin-users-users-list'>
        <div className='admin-users-title-and-search-bar'>
          <div className='admin-users-title'>User List</div>
          <div className='admin-users-search-bar'>
            <IoSearchOutline className='admin-search-icon' size={20} />
            <input
              className='admin-search-input'
              type='text'
              placeholder='Search user by email'
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className='admin-user-list-table'>
          <div className='admin-user-list-table-titles'>
            <div className='user-list-table-title profile'>Profile</div>
            <div className='user-list-table-title email'>Email</div>
            <div className='user-list-table-title name'>Name</div>
            <div className='user-list-table-title role'>Role</div>
          </div>
          {filteredUserList.map((user, index) => (
            <div className='user-list-table-user' key={index}>
              <div className='user-list-table-vertical-bar'></div>
              <div className='user-list-table-profile-container'>
                {
                  user.image ?
                    <img src={'http://localhost:4000/images/' + user.image} className='admin-userlist-user-img'></img>
                    : <div className='user-list-table-profile'>{user.name.charAt(0)}</div>
                }
              </div>
              <div className='user-list-table-email-container'>
                <div className='user-list-table-email'>{user.email}</div>
              </div>
              <div className='user-list-table-name-container'>
                <div className='user-list-table-name'>{user.name}</div>
              </div>
              <div className='user-list-table-role-container'>
                <div className='user-list-table-name'>{user.role}</div>
              </div>
              <FaEdit className='user-list-table-edit' size={20} onClick={() => handleEdit(user._id)} />
              <MdDeleteOutline className='user-list-table-delete' size={25} onClick={() => handleDeleteAlert(user._id)} />
              <HiDotsHorizontal className='user-list-table-dots' size={20} onClick={() => handleView(user._id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
