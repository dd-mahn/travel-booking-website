import React from 'react'
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../styles/login.css'

import registerImg from '../assets/images/register.png'
import { useState } from 'react'

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  })

  const handleChange = e => {
    setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
  }

  const handleClick = e => {
    e.preventDefault()
  }
  return <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="login__img d-flex align-items-center justify-content-center">
            <img src={registerImg} alt="" />
          </div>
        </Col>
        <Col lg='6' className=''>
          <div className="login__container">
            <div className="login__form d-flex flex-column align-items-center justify-content-center">
              
              <h2>Register</h2>

              <Form onSubmit={handleClick}>
                <FormGroup className='w-100'>
                  <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
                </FormGroup>
                <FormGroup className='w-100'>
                  <input type="password" placeholder='Password' required id='password' onChange={handleChange} />
                </FormGroup>
                <Button className='primary__btn auth__btn' type='submit' onClick={handleClick}>Register</Button>
              </Form>
              <p>Already have an account? <Link to='/login'>Log in.</Link></p>
            </div>

            
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Login