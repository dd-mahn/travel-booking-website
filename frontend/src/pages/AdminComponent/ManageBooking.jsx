import React, { useContext, useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/config'
import { AuthContext } from '../../context/AuthContext'
import { Container, Row, Col } from 'reactstrap'
import BookingCard from '../../shared/BookingCard'
import '../../styles/manage-booking.css'
import CommonSection from '../../shared/CommonSection'


const ManageBooking = () => {
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
  const {data:bookings, loading, error} = useFetch(`${BASE_URL}/booking`)
  return (
    <>
      <CommonSection title={'Manage Bookings'}/>
      <section>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading...</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}

          {
            !loading && !error && 
            <Row>
            {
              bookings?.map(booking => (
              <Col lg='6' className='mb-4'>
                <BookingCard booking={booking}/>          
              </Col>))
            }
            </Row>
          }
        </Container>
      </section>
    </>
  )
}

export default ManageBooking