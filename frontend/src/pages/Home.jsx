import React, { useState, useEffect } from 'react';
import '../styles/home.css'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import ImageSlider from '../utils/ImageSlider';

import heroImg from '../assets/images/hero-img.png'
import about1 from '../assets/images/about-1.png'
import about2 from '../assets/images/about-2.png'
import about3 from '../assets/images/about-3.png'
import about4 from '../assets/images/about-4.png'



const Home = () => {
    const aboutImg = [about1, about2, about3, about4]
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((activeIndex + 1) % aboutImg.length);
    };

    useEffect(() => {
        const autoSlideInterval = setInterval(nextSlide, 5000);
        return () => {
        clearInterval(autoSlideInterval);
        };
    }, [activeIndex]);

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
    <section className="about">
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="about__carousel">
                        <div className="about__carousel-display">
                            <img src={about1} alt="" />
                        </div>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="about__title">
                        <h1>About what we serve</h1>
                    </div>
                    <div className="about__wrapper">
                        <ul className="wrapper__list">
                            <li className="wrapper__list-item d-flex align-items-center gap-4 mt-4 about__on-display">
                                <i class="ri-star-line"></i>
                                <h6>Meet Scott - our new AI guide that will help you along creating your dream trip.</h6>
                            </li>
                            <li className="wrapper__list-item d-flex align-items-center gap-4 mt-4">
                                <i class="ri-equalizer-line"></i>
                                <h6>Everything is customizable up to you.</h6>
                            </li>
                            <li className="wrapper__list-item d-flex align-items-center gap-4 mt-4">
                                <i class="ri-calendar-check-line"></i>
                                <h6>Many selected tours are carefully prepared with our experience.</h6>
                            </li>
                            <li className="wrapper__list-item d-flex align-items-center gap-4 mt-4">
                                <i class="ri-global-line"></i>
                                <h6>Open community to share your memories with travelers around the world.</h6>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    {/* About end */}

    </>
  )
}

export default Home