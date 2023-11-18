import React from 'react'
import "./tour-card.css"
import { Card, CardBody } from 'reactstrap'
import { Link} from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'

const AdminTourCard = ({tour}) => {
    const {_id, city, title, photo, price, featured, reviews} = tour

    const {totalRating, avgRating} = calculateAvgRating(reviews)

  return <div className='tour__card'>
    <Card>
        <div className="tour__img">
            <img src={photo} alt="tour-img" />
            {/* {featured && <span>Featured</span>} */}
        </div>
        <CardBody className='card__body'>
            <div className='card__top d-flex align-items-center justify-item-between'>
                <span className="tour__location d-flex align-items-center gap-1">
                    <i class="ri-map-pin-line"></i> {city}
                </span>
                <span className="tour__rating d-flex align-items-center gap-1">
                    <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? 'Not rated':(<span>({reviews.length})</span>)}
                </span>
            </div>
            <h5 className="tour__title">
                <Link to = {`/tours/${_id}`}>{title}</Link>
            </h5>
            <div className="card__bottom d-flex align-items-center justify-content-evenly mt-3">
                <button className="primary__btn modify__btn">
                    <Link to = {`/admin/tour/update/${_id}`}>Modify</Link>
                </button>
                <button className="primary__btn delete__btn">
                    <Link to = {`/admin/tour/delete/${_id}`}>Delete</Link>
                </button>

            </div>
        </CardBody>
    </Card>
    
  </div>
}

export default AdminTourCard