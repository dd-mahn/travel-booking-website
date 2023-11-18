import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../styles/admin-dashboard.css'
import { NavLink, Link } from 'react-router-dom'

import trafficImg from '../assets/images/traffic-graph.png'

const admin__links = [
    {
      path:'/admin/user',
      display:'Manage User'
    },
    {
      path:'/admin/tour',
      display:'Manage Tour'
    },
    {
      path:'/admin/booking',
      display:'Manage Booking'
    }
  ]

const AdminDashboard = () => {
  return (
    <section className='dashboard'>
        <Container>
            <Row className='d-flex justify-content-end mb-5'>
                <div className='dashboard__title text-end'>
                    <h2>Dashboard</h2>
                    <span>Manage website resources</span>
                </div>
            </Row>
            <Row className='d-flex align-items-center justify-content-between mb-5'>
                <Col lg='3'>
                    <div className="dashboard__card">
                        <h3>10k <span>+10%</span></h3>
                        <h6>Users</h6>

                    </div>

                </Col>
                <Col lg='3'>
                    <div className="dashboard__card">
                        <h3>5k <span>+5%</span></h3>
                        <h6>Bookings</h6>

                    </div>               

                </Col>
                <Col lg='3'>
                    <div className="dashboard__card">
                        <h3>2k <span>+10%</span></h3>
                        <h6>Reviews</h6>

                    </div>                

                </Col>
                <Col lg='3'>
                    <div className="dashboard__card">
                        <h3>$15.300 <span>+10%</span></h3>
                        <h6>Income</h6>

                    </div>                

                </Col>
            </Row>
            <Row>
                <Col lg='3'>
                    <ul className="dashboard__menu d-flex flex-column align-center gap-4 mb-0">
                        {admin__links.map((item,index)=>(
                            <li className="dashboard__nav-item d-flex align-items-center" key={index}>
                                <i class="ri-arrow-right-s-line"></i>
                                <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__link':''}>{item.display}</NavLink>
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col lg='9'>
                    <div className="dashboard__graph align-items-center d-flex flex-column">
                        <img src={trafficImg} alt="" />
                    </div>
                </Col>               
            </Row>
        </Container>
    </section>
    
  )
}

export default AdminDashboard