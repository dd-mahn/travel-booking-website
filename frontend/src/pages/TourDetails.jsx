import React, {useRef, useState, useEffect, useContext} from 'react'
import '../styles/tour-detail.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.png'
import Booking from '../component/Booking/Booking'
import Newsletter from '../shared/Newsletter'
import CommonSection from '../shared/CommonSection'
import useFetch from '../hooks/useFetch.js'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../context/AuthContext'
import UpdateTour from '../component/UpdateTour/UpdateTour.jsx'

const TourDetails = () => {
  const {id} = useParams()

  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)

  const {user} = useContext(AuthContext)

  //Control submit to server
  const submitHandler = async e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value

    try {
      if(!user || user === undefined || user === null){
        alert('Please login first!')
      }else if(user.role === 'admin'){
        alert("You're not user!")
      }else{

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating:tourRating
      }

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj)
      })

      const result = await res.json()
      if(! res.ok){
        return alert(result.message)
      }else{
        return alert('Review submitted successfully!')
      }
    }
    } catch (error) {
      alert(error.message)
    }
  }

  //fetch data from database
  const {data:tour, loading, error} = useFetch(`${BASE_URL}/tours/${id}`)

  const {photo, title, desc, price, reviews, address, city, distance, maxGroupSize} = tour

  const {totalRating, avgRating} = calculateAvgRating(reviews)

  // Format date
  const option = {day: 'numeric', month: 'long', year: 'numeric'}

  useEffect(()=>{
    window.scrollTo(0,0)
  },[tour])

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading...</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}

          {
            !loading && !error && <Row>
            <Col lg='8'>
              <div className="tour__content">
                <img src={photo} alt="" />
                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className='tour__info-item d-flex align-items-center gap-3'>

                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i class="ri-star-fill" style={{'color':'var(--secondary-color'}}></i> {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? 'Not rated':(<span>({reviews?.length})</span>)}
                    </span>

                    <span>
                      <i class="ri-map-pin-fill"></i> {address}
                    </span>

                  </div>

                  <div className="tour__extra-details">
                    <span><i class="ri-map-pin-line"></i> {city}</span>
                    <span><i class="ri-money-dollar-circle-line"></i> ${price}/ Person</span>
                    <span><i class="ri-map-pin-4-line"></i> {distance} k/m</span>
                    <span><i class="ri-group-line"></i> {maxGroupSize} people</span>

                  </div>

                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                {/* tour review section start */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className="rating__group d-flex align-items-center gap-3 mb-4">
                      <span onClick={() => setTourRating(1)}>1 <i class="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(2)}>2 <i class="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(3)}>3 <i class="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(4)}>4 <i class="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(5)}>5 <i class="ri-star-s-fill"></i></span>
                    </div>

                    <div className="reviews__input">
                      <input type="text" ref={reviewMsgRef} required placeholder='Share your thought' />
                      <button className="reviews__input-btn primary__btn text-white" type='submit'>Submit</button>
                    </div>
                  </Form>
                  
                  <ListGroup className='user__reviews'>
                    {
                      reviews?.map(review => (
                        <div className="review__item">
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="">
                                <h5>{review.username}</h5>
                                <p>
                                  { new Date(review.createdAt).toLocaleDateString('en-US', option) }
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating}<i class="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>{review.reviewText}</h6>

                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                  
                </div>
                {/* tour review section end */}

              </div>
            </Col>

            <Col lg='4'>
              {
                user?(
                  <div className='p-sticky'>
                    {
                      user.role === 'admin'?(
                        <UpdateTour />
                      ):(
                        <Booking tour={tour} avgRating={avgRating}/>
                      )
                    }
                  </div>                                     
                ):(
                  <Booking tour={tour} avgRating={avgRating}/>
                )
              }
            </Col>
          </Row>
          }
        </Container>
      </section>
      <Newsletter/>
    </>
  )
}

export default TourDetails