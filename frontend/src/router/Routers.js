import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import SearchResultList from '../pages/SearchResultList.jsx'
import Scott from '../pages/Scott'
import ThankYou from '../pages/ThankYou'
import AdminDashboard from '../pages/AdminDashboard'
import ManageUser from '../pages/AdminPages/ManageUser'
import ManageBooking from '../pages/AdminPages/ManageBooking'
import ManageReview from '../pages/AdminPages/ManageReview'
import ManageTour from '../pages/AdminPages/ManageTour'
import UpdateTour from '../pages/AdminPages/UpdateTour'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/Home'/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/scott' element={<Scott/>}/>
        <Route path='/tours/:id' element={<TourDetails/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/tours/search' element={<SearchResultList/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/admin/user' element={<ManageUser/>}/>
        <Route path='/admin/tour' element={<ManageTour/>}/>
        <Route path='/admin/tour/:id' element={<UpdateTour/>}/>
        <Route path='/admin/booking' element={<ManageBooking/>}/>
        <Route path='/admin/review' element={<ManageReview/>}/>



    </Routes>
  )
}

export default Routers