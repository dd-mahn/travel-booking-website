import React from "react";
import './footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'


const quick__links =[
    {
        path:'/home',
        display: 'Home'
    },
    {
        path:'/about',
        display: 'About'
    },
    {
        path:'/tours',
        display: 'Tours'
    },
]
const quick__links2 =[
    {
        path:'/scott',
        display: 'Scott'
    },
    {
        path:'/login',
        display: 'Login'
    },
    {
        path:'/register',
        display: 'Register'
    },
]

const Footer = () => {
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='4'>
                    <div className="logo">
                        <h5>TravelScott</h5>
                    </div>
                    <div className="social__links d-flex align-items-center gap-4">
                        <span>
                            <Link to='#'><i class="ri-youtube-line"></i></Link>
                            <Link to='#'><i class="ri-github-fill"></i></Link>
                            <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                            <Link to='#'><i class="ri-instagram-line"></i></Link>                           
                        </span>
                    </div>
                </Col>
                <Col lg='2'>
                    <h5 className="footer__link-title">Discover</h5>

                    <ListGroup className="footer__quick-links">
                        {
                            quick__links.map((item,index) => (
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='2'>
                    <h5 className="footer__link-title">Quick Links</h5>

                    <ListGroup className="footer__quick-links">
                        {
                            quick__links2.map((item,index) => (
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='4'>
                    <h5 className="footer__link-title">Contact</h5>

                    <ListGroup className="footer__quick-links">
                        {
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                    <h6 className="mb-0 d-flex align-items-center gap-3">
                                        <span><i class="ri-map-pin-line"></i></span>
                                        Address:
                                    </h6>
                                    <p className="mb-0">Hanoi, Vietnam</p>
                                </ListGroupItem>
                            
                        }
                    </ListGroup>

                    <ListGroup className="footer__quick-links">
                        {
                            
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                    <h6 className="mb-0 d-flex align-items-center gap-3">
                                        <span><i class="ri-mail-line"></i></span>
                                        Email:
                                    </h6>
                                    <p className="mb-0">ducmanh0801@gmail.com</p>
                                </ListGroupItem>
                            
                        }
                    </ListGroup>

                    <ListGroup className="footer__quick-links">
                        {
                            
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                    <h6 className="mb-0 d-flex align-items-center gap-3">
                                        <span><i class="ri-phone-line"></i></span>
                                        Phone:
                                    </h6>
                                    <p className="mb-0">+84-12345678</p>
                                </ListGroupItem>
                            
                        }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </footer>
}

export default Footer