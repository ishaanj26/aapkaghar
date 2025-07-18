import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import nodemailer from 'nodemailer'

import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import listingRouter from './routes/listingRoutes.js';


dotenv.config()
const app = express();
const port = process.env.PORT || 4000

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
})

export default transporter

mongoose.connect(`${process.env.MONGO}`).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err)
});

const allowedOrigins = ['http://localhost:3001', 'http://localhost:3002','https://aapkaghar.vercel.app/']

app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: allowedOrigins, credentials: true }))



app.get('/', (req, res) => {
    res.send('Sunshine here we at')
})


app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/listing', listingRouter)

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})