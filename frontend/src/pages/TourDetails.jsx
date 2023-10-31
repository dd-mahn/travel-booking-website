import React, {useRef, useState} from 'react'
import '../styles/tour-detail.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.png'
import Booking from '../component/Booking/Booking'
import Newsletter from '../shared/Newsletter'
import CommonSection from '../shared/CommonSection'

const TourDetails = () => {
  const {id} = useParams()

  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)

  //Control submit to server
  const submitHandler = e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value

    // Call Api
    alert(`${reviewText}, ${tourRating}`)
  }

  const tour = tourData.find(tour => tour.id === id)

  const {photo, title, desc, price, reviews, address, city, distance, maxGroupSize} = tour

  const {totalRating, avgRating} = calculateAvgRating(reviews)

  // Format date
  const option = {day: 'numeric', month: 'long', year: 'numeric'}

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="tour__content">
                <img src={photo} alt="" />
                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className='tour__info-item d-flex align-items-center gap-3'>

                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i class="ri-star-fill" style={{'color':'var(--secondary-color'}}></i> {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? 'Not rated':(<span>({reviews.length})</span>)}
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
                      <input type="text" ref={reviewMsgRef} placeholder='Share your thought' />
                      <button className="primary__btn text-white" type='submit'>Submit</button>
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
                                <h5>Manh</h5>
                                <p>
                                  { new Date('10-18-2023').toLocaleDateString('en-US', option) }
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                5<i class="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>Amazing tour</h6>

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
              <Booking tour={tour} avgRating={avgRating}/>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  )
}

export default TourDetails