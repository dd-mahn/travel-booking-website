import React, { useState, useEffect } from 'react';
import '../styles/home.css'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import heroImg from '../assets/images/hero-img.png'
import About from './HomeComponent/About';
import scottImg from '../assets/images/scott.png'



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
                        <Button className="hero__btn secondary__btn mt-3"><Link to='/scott'>Let's get started</Link></Button>
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
    <section className='scott '>
        <Container>
            <Row>
                <Col className='d-flex align-items-center flex-column mb-5'>
                    <div className="scott__img d-flex align-items-center">
                        <img src={scottImg} alt="" />
                    </div>
                    <div className="scott__wrapper d-flex align-items-center justify-content-center gap-5 mt-5">
                        <div className="scott__wrapper-title">
                            <p>Traveling is an open experience, so feel free to tell <span>Scott</span> about your interests, maybe he will bring a <span>surprise</span>.</p>
                        </div>
                        <Link to='/scott'><Button className="scott__wrapper-btn secondary__btn d-flex align-items-center justify-content-center"><i class="ri-sun-line"></i></Button></Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
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