import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick'

import about1 from '../../assets/images/about-1.png'
import about2 from '../../assets/images/about-2.png'
import about3 from '../../assets/images/about-3.png'
import about4 from '../../assets/images/about-4.png'

const About = () => {
    const aboutImg = [about1,about2,about3,about4]
    const settings = {
        dots:true,
        infinite:true,
        autoplay: true,
        speed:1000,
        autoplaySpeed:4000,
        slidesToShow: 1,
        vertical:true,
        // centerMode: true,
        // variableWidth: true,


        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ]
    }

  return <section className="about">
  <Container>
      <Row>
          <Col lg='6'>
              <Slider {...settings} className='about__carousel d-flex gap-5'>
                    <div className="about__carousel-display">
                        <img src={about1} alt="" />
                    </div>
                    <div className="about__carousel-display">
                        <img src={about2} alt="" />
                    </div>
                    <div className="about__carousel-display">
                        <img src={about3} alt="" />
                    </div>
                    <div className="about__carousel-display">
                        <img src={about4} alt="" />
                    </div>
              </Slider>
          </Col>
          <Col lg='6'>
              <div className="about__title">
                  <h1>About what we serve</h1>
              </div>
              <div className="about__wrapper">
                  <ul className="wrapper__list">
                      <li className="wrapper__list-item d-flex align-items-center gap-4 mt-4 about__on-display">
                          <i class="ri-star-line"></i>
                          <h6>Meet Scott - our guide that will help you along creating your dream trip.</h6>
                      </li>
                      <li className="wrapper__list-item d-flex align-items-center gap-4 mt-4 about__on-display">
                          <i class="ri-equalizer-line"></i>
                          <h6>Everything is customizable up to you.</h6>
                      </li>
                      <li className="wrapper__list-item d-flex align-items-center gap-4 mt-4 about__on-display">
                          <i class="ri-calendar-check-line"></i>
                          <h6>Many selected tours are carefully prepared with our experience.</h6>
                      </li>
                      <li className="wrapper__list-item d-flex align-items-center gap-4 mt-4 about__on-display">
                          <i class="ri-global-line"></i>
                          <h6>Open community to share your memories with travelers around the world.</h6>
                      </li>
                  </ul>
              </div>
          </Col>
      </Row>
  </Container>
</section>
}

export default About