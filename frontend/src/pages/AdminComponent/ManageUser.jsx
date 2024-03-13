import React, { useContext, useState, useEffect } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'

import { BASE_URL } from '../../utils/config'
import CommonSection from '../../shared/CommonSection'
import { AuthContext } from '../../context/AuthContext'
import '../../styles/manage-user.css'
import UserCard from '../../shared/UserCard'

const ManageUser = () => {
  const useFetch = (url) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const {user} = useContext(AuthContext)

    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true)

            try {
                const res = await fetch(url, {
                  method:'get',
                  headers:{
                    Authorization: `Bearer ${user.token}`
                  },
                  credentials:'include'
                })
                if(!res.ok){
                    setError('Failed to fetch')
                }
                const result = await res.json()
                setData(result.data)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchData()
    },[url])
     return{
        data,
        error,
        loading
     }
  }

  const {data:users, loading, error} = useFetch(`${BASE_URL}/users`)

  const [account, setAccount] = useState({
    username:'',
    email:'',
    password:'',
    role:''
  })

  const handleChange = e => {
    setAccount(prev => ({...prev, [e.target.id]:e.target.value}))
  }

  const handleClick = async e => {
    console.log(account)
    e.preventDefault()
    if(window.confirm('Are you sure?')){
      try {
        const res = await fetch(`${BASE_URL}/auth/register`, {
          method:'post',
          headers:{
            'content-type':'application/json'
          },
          credentials:'include',
          body:JSON.stringify(account)
        })

        const result = await res.json()
        if(! res.ok){
          return alert(result.message)
        }else{
          return alert('New Account Added!')
        }

      } catch (error) {
        alert(error.message)
      }
    }
  }

  return (
    <>
      <CommonSection title='Manage Users'/>
      <section>
        <Container>
          <Row>
            <Form className="add__account-form">
              <FormGroup className='d-flex align-items-center justify-content-between'>
                <Col lg='6'>
                  <input type="text" id='username' placeholder='Username' required onChange={handleChange}/>
                </Col>
                <Col lg='6'>
                  <input type="text" id='email' placeholder='Email' required onChange={handleChange} />
                </Col>
              </FormGroup>
              <FormGroup className='d-flex align-items-center justify-content-center mb-0'>
                <Col lg='5'>
                  <input type="password" id='password' placeholder='Password' minLength={8} required onChange={handleChange}/>
                </Col>
                <Col lg='4' className='d-flex align-items-center justify-content-evenly'>
                  <input type="radio" className='role__input' name='role' id='role' value='admin' onClick={handleChange}/>
                  <label htmlFor="admin">Admin</label>
                  <input type="radio" className='role__input' name='role' id='role' value='user' onClick={handleChange} defaultChecked/>
                  <label htmlFor="user">User</label>
                </Col>
                <Col lg='3'>
                  <button className='secondary__btn add__account-btn' onClick={handleClick}>Add New Account</button>               
                </Col>
              </FormGroup>
            </Form>
          </Row>  
        </Container>
      </section>
          
      <section>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading...</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}

          {
            !loading && !error && 
            <Row>
            {
              users?.map(user => (
              <Col lg='3' className='mb-4'>
                <UserCard User={user}/>          
              </Col>))
            }
            </Row>
          }
        </Container>
      </section>
    </>
  )
}

export default ManageUser