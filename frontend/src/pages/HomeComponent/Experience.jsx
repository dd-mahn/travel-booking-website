import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../styles/home.css'

import experienceImg from '../../assets/images/experience.png'

const Experience = () => {
  return (
    <section className='experience'>
      <Container>
        <Row>
          <Col lg='7'>
            <div className="experience__content">

              <h2>With our all experience </h2>
              <p>We believe that we can be your next go-to travel website!</p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span className='mb-3'>5k+</span>
                <h6>Successful trip</h6>
              </div>
              <div className="counter__box">
                <span className='mb-3'>1k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span className='mb-3'>3</span>
                <h6>Years experience</h6>
              </div>

            </div>
          </Col>
          <Col lg='5'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Experience