import React, {useContext, useState} from 'react'
import CommonSection from '../shared/CommonSection'
import { Container, Row, Col } from 'reactstrap'

import { useLocation } from 'react-router-dom'
import TourCard from '../shared/TourCard'

import Newsletter from '../shared/Newsletter'
import { AuthContext } from '../context/AuthContext'
import AdminTourCard from '../shared/AdminTourCard'

const SearchResultList = () => {
  const location = useLocation()

  const [data] = useState(location.state)

  const {user} = useContext(AuthContext)

  return (
    <>
      <CommonSection title={'Search Result'}/>
      <section>
        <Container>
          <Row>
            {
              data.length === 0 ? 
              ( <h4 className='text-center'>No tours found!</h4>)
              : ( data?.map(tour => (
                <Col lg='3' className='mb-4' key={tour._id}>
                  {
                    user?(
                      <div>
                        {
                          user.role === 'admin'?(
                            <AdminTourCard tour={tour}/>
                          ):(
                            <TourCard tour={tour}/>
                          )
                        }
                      </div>
                    ):(
                      <TourCard tour={tour}/>                      
                    )
                  }
                </Col>
              )))
            }
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  )
}

export default SearchResultList