import React, { useContext } from 'react'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../context/AuthContext'

const UserCard = ({User}) => {
    const {user} = useContext(AuthContext)
  const handleDelete = async e => {
    e.preventDefault()
    if(window.confirm('Are you sure?')){
      try {
        const res = await fetch(`${BASE_URL}/users/${User._id}`, {
          method:'delete',
          headers:{
              Authorization: `Bearer ${user.token}`
          },
          credentials:'include'
        })
        

        const result = await res.json()
        if(! res.ok){
            return alert(result.message)
        }else{
            return alert('Deleted Successfully!')
        }
      } catch (error) {
        alert(error.message)
      }
    }
  }
  return (
    <div className='user__card'>
        <h5 className='mb-3'>{User.username}</h5>
        <div>
        <span>Email: {User.email}</span>
        </div>
        <div>
        <span>Role: {User.role}</span>
        </div>
        <button className='primary__btn delete__btn delete__user-btn' onClick={handleDelete}>Delete User</button>
    </div>    
  )
}

export default UserCard