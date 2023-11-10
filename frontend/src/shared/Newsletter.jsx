import React, {useState} from 'react'
import './newsletter.css'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import newsletterImg from '../assets/images/newsletter.png'
import { BASE_URL } from '../utils/config'

const Newsletter = () => {
    const [subscribe, setSubscribe] = useState({
        email:''
    })
    const handleChange = e => {
        setSubscribe(prev => ({...prev, [e.target.id]:e.target.value}))
    }
    const handleClick = () => {

    }
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={newsletterImg} alt="" />
                </div>
            </Col>
            <Col lg='6'>
                <div className='newsletter__content'>
                    <h2>Subscribe now to get useful traveling information.</h2>

                    <Form className="newsletter__input d-flex align-items-center">
                        <FormGroup className=''>
                            <input type="email" placeholder='Enter your email' id='email' required onChange={handleChange} />
                        </FormGroup>
                        <Button className="primary__btn newsletter__btn" onClick={handleClick}>Subscribe</Button>
                    </Form>

                    <p>We will send you notifications about newest promotion, tours, etc,...</p>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter