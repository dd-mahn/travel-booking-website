import React, { useState, useEffect } from 'react';
import '../styles/home.css'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import heroImg from '../assets/images/hero-img.png'
import About from './HomeComponent/About';




const Home = () => {
  return (
    <>
    {/* Hero start  */}
    <section className='hero'>
        <Container>
            <Row className='d-flex justify-content-between'>
                <Col lg='5'>
                    <div className="hero__content">
                        <h1 className='mt-5'>We offer the best traveling experience.</h1>
                        <Button className="hero__btn btn primary__btn mt-3"><Link to='/scott'>Let's get started</Link></Button>
                    </div>
                </Col>

                <Col lg='6'>
                    <div className="hero__img">
                        <img src={heroImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    {/* Hero end */}

    {/* About start */}
    <About />
    {/* About end */}

    {/* Scott start */}
    {/* Scott end */}

    {/* Selected tours start */}
    {/* Selected tours end */}

    {/* Galerry start */}
    {/* Galerry end */}

    {/* Community start */}
    {/* Community end */}

    </>
  )
}

export default Home