import React, { useState } from 'react'
import './UserAccount.css'
import UserProfile from './user_profile/UserProfile'
import UserEdit from './user_edit_profile/UserEdit'

export default function UserAccount(props) {

  const [userID, setUserID] = useState()

  return (
    <div className='user-account'>

      <UserProfile
        setUserID={setUserID}
        isUserProfileClicked={props.isUserProfileClicked}
        setIsUserProfileClicked={props.setIsUserProfileClicked}
        isUserEditClicked={props.isUserEditClicked}
        setIsUserEditClicked={props.setIsUserEditClicked}
      ></UserProfile>

      {
        props.isUserEditClicked ?
          <UserEdit
            userID={userID}
            isUserProfileClicked={props.isUserProfileClicked}
            setIsUserProfileClicked={props.setIsUserProfileClicked}
            isUserEditClicked={props.isUserEditClicked}
            setIsUserEditClicked={props.setIsUserEditClicked}
            isUserUpdated={props.isUserUpdated}
            setIsUserUpdated={props.setIsUserUpdated}
          ></UserEdit>
          : <></>
      }
    </div>
  )
}
