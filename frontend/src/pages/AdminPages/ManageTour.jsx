import {React, useState, useEffect} from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import AdminTourCard from '../../shared/AdminTourCard'
import CommonSection from '../../shared/CommonSection'
import SearchBar from '../../shared/SearchBar'
import '../../styles/manage-tour.css'

import {BASE_URL} from '../../utils/config'
import useFetch from '../../hooks/useFetch'


const ManageTour = () => {
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)
  const {data:tours, loading, error} = useFetch(`${BASE_URL}/tours?page=${page}`)
  const {data:tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`)

  const [add, setAdd] = useState({
    title:'',
    city:'',
    address:'',
    desc:'',
    distance:1,
    price:1,
    maxGroupSize:1,
    reviews: [],
    photo:'undefined',
    featured: false
  })

  const handleChange = e => {
    setAdd(prev => ({...prev, [e.target.id]:e.target.value}))
  }

  const handleClick = async e => {
    e.preventDefault()
    if(window.confirm('Are you sure?')){
        try {
            const res = await fetch(`${BASE_URL}/tours/`, {
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                credentials:'include',
                body:JSON.stringify(add)
            })
            const result = await res.json()

            if(! res.ok){
                return alert(result.message)
            }
            alert('Successfully Added!')
        } catch (error) {
            alert(error.message)
        }
    }
  }

  useEffect(() => {
    const pages = Math.ceil(tourCount/8)
    setPageCount(pages)
    window.scrollTo(0,0)
  }, [page, tourCount, tours])

  return (
    <>
      <CommonSection title={'Manage Tours'} color={'var(--primary-color'} />
      <section className='pb-0'>
        <Container>
          <Row className='mb-5'>
            <SearchBar />
          </Row>
          <Row>
            <Form className='add__tour-form'>
              <FormGroup className='add__tour-subform d-flex align-items-center justify-content-between'>
                <Col lg='6'>
                  <input type="text" id='title' placeholder='Title' required onChange={handleChange} />
                </Col>
                <Col lg='3'>
                  <input type="text" id='city' placeholder='City' required onChange={handleChange} />
                </Col>
                <Col lg='3'>
                  <input type="text" id='address' placeholder='Address' required onChange={handleChange} />
                </Col>                
              </FormGroup>

              <FormGroup className='add__tour-subform d-flex align-items-center justify-content-between'>
                <Col lg='4'>
                  <input type="number" id='distance' placeholder='Distance' required onChange={handleChange} />
                </Col>
                <Col lg='4'>
                  <input type="number" id='price' placeholder='Price' required onChange={handleChange} />
                </Col>
                <Col lg='4'>
                  <input type="number" id='maxGroupSize' placeholder='Max Group Size' required onChange={handleChange} />
                </Col>
              </FormGroup>
              
              <FormGroup className='add__tour-subform d-flex align-items-center justify-content-between gap-4 flex-column'>              
                  <input type="text" id='desc' placeholder='Description' required onChange={handleChange} />
                  <button className="secondary__btn add__tour-btn" onClick={handleClick}>Add New Tour</button> 

              </FormGroup>
              
            </Form>

          </Row>
        </Container>
      </section>
      <section>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading...</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}

          {
            !loading && !error && <Row>
            {
              tours?.map(tour => (
              <Col lg='3' className='mb-4'><AdminTourCard tour={tour} key={tour._id}/>
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
          }
        </Container>
      </section>
    </>
  )
}

export default ManageTour