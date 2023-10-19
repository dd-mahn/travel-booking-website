import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick'

import communityImg from '../../assets/images/community.png'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'


const Community = () => {
    const settings = {
        dots:true,
        infinite:true,
        autoplay: true,
        speed:1000,
        swipeToSlide:true,
        arrows:false,
        autoplaySpeed:4000,
        slidesToShow: 1,
        adaptiveHeight:true,
        variableHeight:false,
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

    return <section className='community'>
        <Container>
            <Row>
                <Col lg='6'>
                    <h1 className='community__title'>They said</h1>
                    <Slider {...settings} className='community__carousel mt-5'>
                        <div className="community__carousel-item py-3">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, saepe dignissimos accusantium rerum culpa atque nam reiciendis fuga vero similique.</p>
                            <div className="d-flex align-items-center gap-4 mt-3">
                                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                                <div>
                                    <h6 className='mb-0 mt-3'>John Doe</h6>
                                    <p>Customer</p>
                                </div>
                            </div>
                        </div>
                        <div className="community__carousel-item py-3">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, saepe dignissimos accusantium rerum culpa atque nam reiciendis fuga vero similique.</p>
                            <div className="d-flex align-items-center gap-4 mt-3">
                                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                                <div>
                                    <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                                    <p>Customer</p>
                                </div>
                            </div>
                        </div>
                        <div className="community__carousel-item py-3">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, saepe dignissimos accusantium rerum culpa atque nam reiciendis fuga vero similique.</p>
                            <div className="d-flex align-items-center gap-4 mt-3">
                                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                                <div>
                                    <h6 className='mb-0 mt-3'>John Doe</h6>
                                    <p>Customer</p>
                                </div>
                            </div>
                        </div>
                        <div className="community__carousel-item py-3">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, saepe dignissimos accusantium rerum culpa atque nam reiciendis fuga vero similique.</p>
                            <div className="d-flex align-items-center gap-4 mt-3">
                                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                                <div>
                                    <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                                    <p>Customer</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </Col>
                <Col lg='6'>
                <div className="community__img">
                        <img src={communityImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Community