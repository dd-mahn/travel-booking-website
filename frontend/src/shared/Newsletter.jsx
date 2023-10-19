import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import newsletterImg from '../assets/images/newsletter.png'

const Newsletter = () => {
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
                    <h2>Subcribe now to get useful traveling information.</h2>

                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        <button className="primary__btn newsletter__btn">Subcribe</button>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet vitae quod modi doloribus tenetur maiores. Veniam, blanditiis id magni repudiandae eveniet molestias? Perspiciatis est quae temporibus eveniet explicabo expedita.</p>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter