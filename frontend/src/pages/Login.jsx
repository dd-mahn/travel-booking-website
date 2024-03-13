import React from 'react'
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../styles/login.css'

import loginImg from '../assets/images/login.png'
import { useState, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  })

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = e => {
    setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
  }

  const handleClick = async e => {
    e.preventDefault()
    dispatch({type:'LOGIN_START'})
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers:{
          'content-type':'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
      })
      const result = await res.json()

      if(! res.ok)alert(result.message)
      dispatch({type:'LOGIN_SUCCESS', payload:{user:result.data, role:result.data.role}})
      if(result.data.role === 'user'){
        navigate('/home')
      }
      // else{
      //   navigate('/admin')
      // }
      
    } catch (err) {
      dispatch({type:'LOGIN_FAILURE', payload:err.message})
    }
  }
  return <section>
    <Container>
      <Row className='mb-5 d-flex align-items-center login__container'>
        <Col lg='6'>
          <div className="login__img d-flex align-items-center justify-content-center">
            <img src={loginImg} alt="" />
          </div>
        </Col>
        <Col lg='6' className=''>
          <div>
            <div className="login__form d-flex flex-column align-items-center justify-content-center">
              
              <h2 className='mt-3'>Login</h2>

              <Form onSubmit={handleClick}>
                <FormGroup className='w-100'>
                  <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
                </FormGroup>
                <FormGroup className='w-100'>
                  <input type="password" placeholder='Password' required id='password' onChange={handleChange} />
                </FormGroup>
                <Button className='primary__btn auth__btn' type='submit' onClick={handleClick}>Login</Button>
              </Form>
              <p>Don't have an account? <Link to='/register'>Create one.</Link></p>
            </div>

            
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Login