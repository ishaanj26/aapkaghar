import express from 'express'
import { createListing } from '../controllers/listingController.js'
import userAuth from '../middleware/userAuth.js'

const listingRouter = express.Router()

listingRouter.post('/create',userAuth,createListing)

export default listingRouter