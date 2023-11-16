import React, {useState, useContext} from 'react'
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import {Link, useNavigate} from 'react-router-dom'
import '../styles/login.css'

import registerImg from '../assets/images/register.png'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

const Register = () => {
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  })

  const {dispatch} = useContext(AuthContext)

  const handleChange = e => {
    setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
  }

  const handleClick = async e => {
    e.preventDefault()

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(credentials)
      })
      const result = await res.json()

      if(!res.ok)alert(result.message)

      dispatch({type:'REGISTER_SUCCESS'})
      navigate('/login')
    } catch (err) {
      alert(err.message)
    }
  }
  return <section>
    <Container>
      <Row className='mb-5'>
        <Col lg='6'>
          <div className="login__img d-flex align-items-center justify-content-center">
            <img src={registerImg} alt="" />
          </div>
        </Col>
        <Col lg='6' className=''>
          <div className="login__container">
            <div className="login__form d-flex flex-column align-items-center justify-content-center pt-5">
              
              <h2 className='mt-3'>Register</h2>

              <Form onSubmit={handleClick}>
                <FormGroup className='w-100'>
                  <input type="text" placeholder='Username' required id='username' onChange={handleChange} />
                </FormGroup>
                <FormGroup className='w-100'>
                  <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
                </FormGroup>
                <FormGroup className='w-100'>
                  <input type="password" placeholder='Password' required id='password' minLength={8} onChange={handleChange} />
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

export default Register