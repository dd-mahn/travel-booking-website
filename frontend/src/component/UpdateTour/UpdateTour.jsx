import React, { useContext, useState } from 'react'
import { Form, FormGroup, Button } from 'reactstrap'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import '../../component/UpdateTour/update-tour.css'

const UpdateTour = (tour) => {
    const {photo, title, desc, price, reviews, address, city, distance, maxGroupSize} = tour

    const {user} = useContext(AuthContext)

    const {id} = useParams()

    const [update, setUpdate] = useState({
        title:'',
        city:'',
        address:'',
        desc:'',
        distance:1,
        price:1,
        maxGroupSize:1,
    })

    const navigate = useNavigate()

    const handleChange = e => {
        setUpdate(prev => ({...prev, [e.target.id]:e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            if(!user || user === undefined || user===null){
                return alert('Please login first!')
            }
            const res = await fetch(`${BASE_URL}/tours/${id}`, {
                method:'put',
                headers:{
                    'content-type':'application/json'
                },
                credentials:'include',
                body:JSON.stringify(update)
            })
            const result = await res.json()

            if(! res.ok){
                return alert(result.message)
            }
            alert('Successfully Updated!')
            navigate('/admin/tour')
        } catch (error) {
            alert(error.message)
        }
    }
  return (
    <div className='update__tour'>
        <h5 className='mb-3 text-center'>Update Tour Information</h5>
        <div className='mb-3'>
            <Form className="update__tour-form d-flex align-items-center flex-column">
                <FormGroup>
                    <input type="text" id='title' placeholder='Title' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <input type="text" id='city' placeholder='City' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <input type="text" id='address' placeholder='Address' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <input type="text" id='desc' placeholder='Description' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <input type="number" id='distance' placeholder='Distance' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <input type="number" id='price' placeholder='Price' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <input type="number" id='maxGroupSize' placeholder='Max Group Size' required onChange={handleChange} />
                </FormGroup>
            </Form>
        </div>
        <div className='d-flex justify-content-center'>
            <Button className="primary__btn update__tour-btn" onClick={handleClick}>
                Update
            </Button>
        </div>
    </div>        
  )
}

export default UpdateTour