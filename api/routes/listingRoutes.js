import express from 'express'
import { createListing, deleteListing, updateListing } from '../controllers/listingController.js'
import userAuth from '../middleware/userAuth.js'

const listingRouter = express.Router()

listingRouter.post('/create', userAuth, createListing)
listingRouter.post('/update/:id', userAuth, updateListing)
listingRouter.delete('/delete/:id', userAuth, deleteListing)

export default listingRouter