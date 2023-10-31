import React,{useState} from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button, Col } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const Booking = ({tour, avgRating}) => {
    const {price, reviews} = tour

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'example@gmail.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: '',
    })

    const handleChange = e => {
        setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
    }

    const serviceFee = 10
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)

    // Send data to server
    const handleClick = e => {
        e.preventDefault()

        navigate('/thank-you')
    }

  return (
  <div className="booking">
    <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>${price} <span>/ Person</span></h3>
        <span className="tour__rating d-flex align-items-center">
            <i class="ri-star-fill"></i> 
            {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
    </div>
    {/* Booking form start */}
    <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
            <FormGroup>
                <input type="text" placeholder='Full Name' id='fullName' required onClick={handleChange} />
            </FormGroup>
            <FormGroup>
                <input type="number" placeholder='Phone' id='phone' required onClick={handleChange} />
            </FormGroup>
            <FormGroup className='d-flex align-items-center justify-content-between gap-3'>
                <Col lg='7'>
                <input type="date" placeholder='' id='bookAt' required onClick={handleChange} />
                </Col>
                <Col lg='4'>
                <input type="number" placeholder='Guest' id='guestSize' required onClick={handleChange} />
                </Col>
            </FormGroup>
        </Form>
    </div>
    {/* Booking form end */}

    {/* Booking bottom */}
    <div className="booking__bottom">
        <ListGroup>
            <ListGroupItem className='border-0 px-0'>
                <h5 className='d-flex align-items-center gap-1'>
                    ${price} <i class="ri-close-line"></i> 1 person </h5>
                <span> ${price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
                <h5>Service charge</h5>
                <span> ${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total'>
                <h5>Total</h5>
                <span> ${totalAmount}</span>
            </ListGroupItem>

            <Button className='secondary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
        </ListGroup>
    </div>
  </div>

  )
}

export default Booking