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

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/Home'/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/tour' element={<Tours/>}/>
        <Route path='/scott' element={<Scott/>}/>
        <Route path='/tour/:id' element={<TourDetails/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/tour/search' element={<SearchResultList/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>


    </Routes>
  )
}

export default Routers