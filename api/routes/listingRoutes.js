import express from 'express'
import { AllListingsforBookMark, createListing, deleteListing, getAllListingsforSearch, getListing, updateListing } from '../controllers/listingController.js'
import userAuth from '../middleware/userAuth.js'

const listingRouter = express.Router()

listingRouter.post('/create', userAuth, createListing)
listingRouter.post('/update/:id', userAuth, updateListing)
listingRouter.delete('/delete/:id', userAuth, deleteListing)
listingRouter.get('/get/:id', getListing)
listingRouter.get('/get', getAllListingsforSearch)
listingRouter.post('/getAllListings', AllListingsforBookMark)

export default listingRouter