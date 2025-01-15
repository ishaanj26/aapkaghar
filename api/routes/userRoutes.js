import express from 'express'
import userAuth from '../middleware/userAuth.js'
import { getUserData, getUserListings,getUser } from '../controllers/userController.js'

const userRouter= express.Router()

userRouter.get('/data',userAuth,getUserData)
userRouter.get('/listings/:id',userAuth,getUserListings)
userRouter.get('/:id',userAuth,getUser)

export default userRouter