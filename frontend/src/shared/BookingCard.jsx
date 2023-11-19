import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'


const BookingCard = ({booking}) => {
  const option = {day: 'numeric', month: 'long', year: 'numeric'}

  return (
    <div className="booking__card">
        <h5>{booking.tourName}</h5>
        {/* <div><span>UserID: {booking.userId}</span></div> */}
        <div><span>User Email: {booking.userEmail}</span></div>
        <div><span>Full name: {booking.fullName}</span></div>
        <div><span>Guest size: {booking.guestSize}</span></div>
        <div><span>Phone: {booking.phone}</span></div>
        <div><span>Date: {new Date(booking.bookAt).toLocaleDateString('en-US', option)}</span></div>
    </div>
  )
}

export default BookingCard