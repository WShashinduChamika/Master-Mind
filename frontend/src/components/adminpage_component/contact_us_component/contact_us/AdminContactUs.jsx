import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdContactMail } from "react-icons/md";
import './AdminContactUs.css'
import Swal from 'sweetalert2';

export default function AdminContactUs(props) {

   const [contactUsList, setContactUsList] = useState([])
   const [searchQuery, setSearchQuery] = useState("")
   const [filteredContactUsList, setFilteredContactUsList] = useState([])
   const [isDeleted,setIsDeleted] = useState(false)

   const getContactUsList = async () => {
      const response = await fetch('/api/contact_us/', {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' }
      })

      const json = await response.json()

      if (response.ok) {
         setContactUsList(json)
         setFilteredContactUsList(json)
      }
   }

   const handleMore = (id) => {
      props.setContactUsID(id)
      props.setIsContactUsFormClicked(!props.isContactUsFormClicked)
   }
   

   const handleDeleteAlert = (id)=>{
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
             deleteContact(id)
          } 
        });
  }

  const deleteContact = async (id) => {

   const response = await fetch('/api/contact_us/' + id, {
       method: 'DELETE',
       headers: { 'Content-Type': 'application/json' },
   })
   if (response.ok) {
      Swal.fire({
         title: "Deleted!",
         text: "The contact us information is deleted",
         icon: "success"
       });
       setIsDeleted(!isDeleted)
   } else {
       alert('error')
   }
}

   const handleSearch = (e) => {
      const query = e.target.value.toLowerCase()
      setSearchQuery(query)
      const filteredList = contactUsList.filter(contact => contact.subject.toLowerCase().includes(query))
      setFilteredContactUsList(filteredList)
   }

   useEffect(() => {
      const adminUsers = document.getElementById('admin-contact-us')
      if (props.isContactUsClicked) {
         adminUsers.classList.remove('admin-contact-invisible')
         adminUsers.classList.add('admin-contact')
      } else {
         adminUsers.classList.remove('admin-contact')
         adminUsers.classList.add('admin-contact-invisible')
      }
      getContactUsList()
   }, [props.isContactUsClicked,isDeleted])

   return (
      <div className='admin-contact-invisible' id='admin-contact-us'>
         <div className='admin-navigation-title'>Contact Us</div>
         <div className='admin-path'>Admin Panel / Contact Us List</div>
         <div className='amin-contact-contact-list'>
            <div className='admin-contact-title-and-search-bar'>
               <div className='admin-contact-title'>User List</div>
               <div className='admin-contact-search-bar'>
                  <IoSearchOutline className='admin-search-icon' size={20} />
                  <input className='admin-search-input'
                     type='text'
                     placeholder='Search Subject'
                     value={searchQuery}
                     onChange={handleSearch}
                  ></input>
               </div>
            </div>
            <div className='admin-contact-list-table'>
               <div className='admin-contact-list-table-titles'>
                  <div className='contact-list-table-title contact-email'>Email</div>
                  <div className='contact-list-table-title contact-name'>Name</div>
                  <div className='contact-list-table-title contact-subject'>Subject</div>
               </div>
               {filteredContactUsList.map((contact) => (
                  <div className='contact-list-table-contact' key={contact._id}>
                     <div className='contact-list-table-vertical-bar'></div>
                     <div className='contact-list-contact-icon-container'>
                        <MdContactMail size={22} className='contact-list-table-icon' />
                     </div>
                     <div className='contact-list-table-email-container'>
                        <div className='contact-list-table-email'>{contact.email}</div>
                     </div>
                     <div className='contact-list-table-name-container'>
                        <div className='contact-list-table-name'>{contact.userName}</div>
                     </div>
                     <div className='contact-list-table-subject-container'>
                        <div className='contact-list-table-subject'>{contact.subject}</div>
                     </div>
                     <MdDeleteOutline className='contact-list-table-delete' size={25} onClick={() => handleDeleteAlert(contact._id)} />
                     <HiDotsHorizontal className='contact-list-table-dots' size={20} onClick={() => { handleMore(contact._id) }} />
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}
