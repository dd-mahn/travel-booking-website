import React, {useRef, useEffect, useContext} from 'react'
import './header.css'
import {Container, Row, Col, Button} from 'reactstrap'
import {NavLink, Link, useNavigate} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'

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
  const headerRef = useRef(null)

  const navigate = useNavigate()
  const {user, dispatch} = useContext(AuthContext)

  const logout = () => {
    dispatch({type:'LOGOUT'})
    navigate('/')
  }

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if(
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc()
    return window.addEventListener('scroll', stickyHeaderFunc)
  })

  return <header className='header' ref={headerRef}>
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
                {
                  user?(<>
                    <h5 className='username mb-0'>{user.username}</h5>
                    <Button className='logout__btn secondary__btn' onClick={logout}>Logout</Button>
                  </>
                  ):(
                    <>
                      <Button className="primary__btn login__btn"><Link to='/login'>Login</Link></Button>
                      <Button className="primary__btn register__btn"><Link to='/register'>Register</Link></Button>
                    </>
                  )
                }                
              </div>
            </div>
        </Row>
    </Container>
  </header>
}

export default Header