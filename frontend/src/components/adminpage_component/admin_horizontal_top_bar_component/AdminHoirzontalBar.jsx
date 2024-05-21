import React from 'react'
import './AdminHorizontalBar.css'

import { FaBars } from "react-icons/fa6";

export default function AdminHoirzontalBar() {
  return (
    <div className='admin-horizontal-top-bar'>
       <FaBars className='admin-top-bar-menu' size={20}></FaBars>
       <div className='admin-top-bar-user-profile'>
         S
       </div>
    </div>
  )
}
