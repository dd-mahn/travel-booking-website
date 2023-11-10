import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/thank-you.css'


const ThankYou = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='12' className='pt-5 text-center'>
                <div className="thank-you">
                    <span>
                        <i class="ri-checkbox-circle-line"></i>
                        <h1 className="mb-3 fw-semibold">Thank you</h1>
                        <h3 className="mb-3">Tour booked successfully!</h3>

                        <Button className='primary__btn w-25'><Link to='/'>Back to home</Link></Button>
                    </span>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default ThankYou