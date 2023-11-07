import React from 'react'
import './header.css'
import {Container, Row, Col, Button} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom'


const nav__links =[
  {
      path:'/home',
      display: 'Home'
  },
  {
      path:'/about',
      display: 'About'
  },
  {
      path:'/tours',
      display: 'Tours'
  },
  {
      path:'/community',
      display: 'Community'
  }
]
const Header = () => {
  return <header className='header'>
    <Container>
        <Row>
            <div className="nav__container d-flex align-items-center justify-content-between">
              <div className="brand">
                <span>TravelScott</span>
              </div>

              <div className="navigation ">
                <ul className="menu d-flex align-center gap-5 mb-0">
                    {nav__links.map((item,index)=>(
                      <li className="nav__item" key={index}>
                          <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__link':''}>{item.display}</NavLink>
                      </li>
                    ))}
                </ul>
              </div>
              
              <div className="buttons d-flex align-items-center gap-3">
                <Button className="primary__btn login__btn"><Link to='/login'>Login</Link></Button>
                <Button className="primary__btn register__btn"><Link to='/register'>Register</Link></Button>
              </div>
            </div>
        </Row>
    </Container>
  </header>
}

export default Header