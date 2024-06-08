import React, { useState } from 'react'
import './UsersList.css'
import AdminUsers from './users/AdminUsers'
import AdminEndUserProfile from './user_profile/AdminEndUserProfile'
import AdminEndUserEdit from './user_edit/AdminEndUserEdit'

export default function UsersList(props) {

  const [userID,setUserID] = useState()

  return (
    <div className='admin-users-list'>

      <AdminUsers
        isUsersClicked={props.isUsersClicked}
        setIsUsersClicked={props.setIsUsersClicked}
        isUserProfileClicked={props.isUserProfileClicked}
        setIsUserProfileClicked={props.setIsUserProfileClicked}
        isUserEditClicked={props.isUserEditClicked}
        setIsUserEditClicked={props.setIsUserEditClicked}
        isUserDeleted={props.isUserDeleted}
        setIsUserDeleted={props.setIsUserDeleted}
        isDisplayUserDeleteForm={props.isDisplayUserDeleteForm}
        setIsDisplayUserDeleteForm={props.setIsDisplayUserDeleteForm}
        setUserID={setUserID}
      ></AdminUsers>

      {props.isUserProfileClicked ?
        <AdminEndUserProfile
          isUsersClicked={props.isUsersClicked}
          setIsUsersClicked={props.setIsUsersClicked}
          isUserProfileClicked={props.isUserProfileClicked}
          setIsUserProfileClicked={props.setIsUserProfileClicked}
          isUserEditClicked={props.isUserEditClicked}
          setIsUserEditClicked={props.setIsUserEditClicked}
          userID={userID}
        ></AdminEndUserProfile> : <></>}
      {
        props.isUserEditClicked ?
          <AdminEndUserEdit
            isUsersClicked={props.isUsersClicked}
            setIsUsersClicked={props.setIsUsersClicked}
            isUserProfileClicked={props.isUserProfileClicked}
            setIsUserProfileClicked={props.setIsUserProfileClicked}
            isUserEditClicked={props.isUserEditClicked}
            setIsUserEditClicked={props.setIsUserEditClicked}
            userID={userID}
          ></AdminEndUserEdit> : <></>
      }

    </div>
  )
}
