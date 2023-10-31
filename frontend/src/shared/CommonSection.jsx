import React from 'react'
import './common-section.css'
import { Container, Row, Col } from 'reactstrap'

const CommonSection = ({title,color}) => {
  return (
    <section className='common__section d-flex align-items-center justify-content-center' style={{"background":color}}>
        <Container>
            <Row>
                <Col lg='12'>
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CommonSection