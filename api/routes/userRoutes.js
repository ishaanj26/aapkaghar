import express from 'express'
import userAuth from '../middleware/userAuth.js'
import { getUserData, getUserListings,getUser,addBookMarks } from '../controllers/userController.js'

const userRouter= express.Router()

userRouter.get('/data',userAuth,getUserData)
userRouter.get('/listings/:id',userAuth,getUserListings)
userRouter.get('/:id',userAuth,getUser)
userRouter.post('/addBookmarks',userAuth,addBookMarks)

export default userRouter