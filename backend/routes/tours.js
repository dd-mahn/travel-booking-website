import express from 'express'
import {createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch} from '../controllers/tourController.js'

const router = express.Router()

//create new tour
router.post("/", createTour)

//update tour
router.put("/:id", updateTour)

//delete tour
router.delete("/:id", deleteTour)

//get single tour
router.get("/:id", getSingleTour)

//get all tour
router.get("/", getAllTour)

//get tour by searching
router.get('/search/getTourBySearch', getTourBySearch)
export default router