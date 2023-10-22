import React from 'react'
import TourCard from '../../shared/TourCard'
import TourData from "../../assets/data/tours"
import { Col } from 'reactstrap'

const FeaturedTourList = () => {
  let FeaturedTourData = []
  for(let i = 0; i < 6; i++){
    FeaturedTourData.push(TourData[i])
  }

  return (
    <>
    {
        FeaturedTourData?.map(tour=> (
            <Col lg='3' className='mb-4' key={tour.id}>
                <TourCard tour={tour}/>
            </Col>
        ))
    }
    </>
  )
}

export default FeaturedTourList