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

  return (
    <>
      <CommonSection title='Manage Users'/>

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