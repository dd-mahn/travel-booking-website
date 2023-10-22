import React, {useState, useEffect} from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tours.css'
import { Container,Row,Col } from 'reactstrap'

import tourData from '../assets/data/tours'
import SearchBar from '../shared/SearchBar'
import TourCard from '../shared/TourCard'
import Newsletter from '../shared/Newsletter'

const Tours = () => {
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const pages = Math.ceil(5/4)
    setPageCount(pages)
  }, [page])

  return (
    <>
      <CommonSection title={'All Tours'} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {
              tourData?.map(tour => (
              <Col lg='3' className='mb-4'><TourCard tour={tour} key={tour.id}/>
              </Col>))
            }

            <Col lg='12'>
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number => (
                  <span key={number} onClick={() => setPage(number)} className={page === number ? 'active__page' : ''}>
                    {number+1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  )
}

export default Tours