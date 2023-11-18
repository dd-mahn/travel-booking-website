import React from 'react'
import "./tour-card.css"
import { Card, CardBody } from 'reactstrap'
import { Link} from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'

import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

const AdminTourCard = ({tour}) => {
    const {_id, city, title, photo, price, featured, reviews} = tour

    const {totalRating, avgRating} = calculateAvgRating(reviews)

    const handleClick = async e => {
        e.preventDefault()
        if(window.confirm('Are your sure?')){
            try {
                const res = await fetch(`${BASE_URL}/tours/${_id}`, {
                    method:'delete',
                })

                const result = await res.json()
                if(! res.ok){
                    return alert(result.message)
                }else{
                    return alert('Deleted Successfully!')
                }
            } catch (error) {
                alert(error.message)
            }
        }
    }

  return <div className='tour__card'>
    <Card>
        <div className="tour__img">
            <img src={photo} alt="tour-img" />
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
                    <Link to = {`/tours/${_id}`}>Modify</Link>
                </button>
                <button className="primary__btn delete__btn" onClick={handleClick}>
                    Delete
                </button>

            </div>
        </CardBody>
    </Card>
    
  </div>
}

export default AdminTourCard