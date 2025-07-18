import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import transporter from "../index.js";
import { EMAIL_VERIFY_TEMPLATE, PASSWORD_RESET_TEMPLATE } from "../config/emailTemplates.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !password || !email) {
        return res.json({ success: false, message: "Missing Values" })
    }
    try {
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.json({ success: false, message: "Email already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({ name, email, password: hashedPassword })
        await user.save();
        const token = jwt.sign({ id: user._id },
            process.env.JWT_SECRET, { expiresIn: '7d' }
        )
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        //sending welcome email
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Welcome to AapkaGhar',
            text: `Welcome to AapkaGhar!Your account has been created with email id: ${email}.`
        }
        await transporter.sendMail(mailOptions);
        return res.json({ success: true })
    }
    catch (e) {
        return res.json({ success: false, message: e.message })
    }
}


export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!password || !email) {
        return res.json({ success: false, message: "Missing Values" })
    }
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "Email does not exists" })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Password" })
        }
        const token = jwt.sign({ id: user._id },
            process.env.JWT_SECRET, { expiresIn: '7d' }
        )
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.json({ success: true })
    }
    catch (e) {
        return res.json({ success: false, message: e.message })
    }
}

export const google = async (req, res) => {
    const user = await userModel.findOne({ email: req.body.email })
    try {
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            const { password: pass, ...rest } = user._doc
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            return res.json({ success: true, rest })
        } else {
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)
            const hashedPassword = await bcrypt.hash(generatedPassword, 10)
            const newUser = new userModel({ name: req.body.name, isAccountVerified: true, email: req.body.email, password: hashedPassword, avatar: req.body.photo })
            await newUser.save()
            const token = jwt.sign({ id: newUser._id },
                process.env.JWT_SECRET, { expiresIn: '7d' }
            )
            const { password: pass, ...rest } = newUser._doc
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            //sending welcome email
            const mailOptions = {
                from: process.env.SENDER_EMAIL,
                to: req.body.email,
                subject: 'Welcome to AapkaGhar',
                text: `Welcome to AapkaGhar!Your account has been created with email id: ${req.body.email}.`
            }
            await transporter.sendMail(mailOptions);
            return res.json({ success: true, rest })
        }
    } catch (e) {
        return res.json({ success: false, message: e.message, user })
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })

        return res.json({ success: true, message: "Logged Out" })

    }
    catch (e) {
        return res.json({ success: false, message: e.message })
    }
}
//Send verification OTP
export const sendVerifyOtp = async (req, res) => {
    try {
        const { userId } = req.body
        const user = await userModel.findById(userId)
        if (user.isAccountVerified) {
            return res.json({ success: false, message: "Account is already verified" })
        }
        const otp = String(Math.floor(100000 + Math.random() * 900000))
        user.verifyOtp = otp
        user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000
        await user.save()

        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Account Verification OTP',
            // text: `Your OTP is ${otp}. Verify you account using the OTP.`,
            html: EMAIL_VERIFY_TEMPLATE.replace("{{otp}}", otp).replace("{{email}}", user.email)
        }
        return transporter.sendMail(mailOption)
            .then(() => res.json({ success: true, message: "OTP sent successfully" }))
    }
    catch (e) {
        return res.json({ success: false, message: e.message })
    }
}

export const verifyEmail = async (req, res) => {
    const { userId, otp } = req.body
    if (!userId || !otp) {
        return res.json({ success: false, message: "Please enter the correct OTP or try again later" })
    }

    try {
        const user = await userModel.findById(userId)
        if (!user) {
            return res.json({ success: false, message: "User not found" })
        }
        if (user.verifyOtp !== otp || user.verifyOtp === '') {
            return res.json({ success: false, message: "Invalid OTP" })
        }
        if (user.verifyOtpExpireAt < Date.now()) {
            return res.json({ success: false, message: "OTP expired" })
        }
        user.isAccountVerified = true
        user.verifyOtp = ''
        user.verifyOTPExpireAt = 0
        await user.save()
        return res.json({ success: true, message: "Email verified successfully" })
    } catch (e) {
        return res.json({ success: false, message: e.message })
    }

}

export const isAuthenticated = async (req, res) => {
    try {
        return res.json({ success: true })
    } catch (e) {
        return res.json({ success: false, message: e.message })
    }
}

// password reset OTP
export const sendResetOTP = async (req, res) => {
    const { email } = req.body
    if (!email) {
        return res.json({ success: false, message: "Email is Required" })
    }
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "User not found" })
        }
        const otp = Math.floor(100000 + Math.random() * 900000)
        user.resetOtp = otp
        user.resetOtpExpireAt = Date.now() + 300000 // 5 minutes
        await user.save()

        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Password Reset OTP',
            // text: `Your OTP for resetting the password is ${otp}. Use this OTP to proceed with reseeting the password`,
            html: PASSWORD_RESET_TEMPLATE.replace("{{otp}}", otp).replace("{{email}}", user.email)
        }
        await transporter.sendMail(mailOption)
        return res.json({ success: true, message: "OTP sent successfully" })
    } catch (e) {
        return res.json({ success: false, message: e.message })
    }
}

//reset user pasword
export const resetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body
    if (!email || !otp || !newPassword) {
        return res.json({ success: false, message: "Email,OTP and Password is required" })
    }
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "User not found" })
        }
        if (user.resetOtp !== otp || user.resetOtp === '') {
            return res.json({ success: false, message: "Invalid OTP" })
        }
        if (user.verifyOtpExpireAt > Date.now()) {
            return res.json({ success: false, message: "OTP expired" })
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10)
        user.password = hashedPassword
        user.resetOtp = ''
        user.resetOtpExpireAt = 0

        await user.save()
        return res.json({ success: true, message: "Password has been changed Successfully" })
    } catch (e) {
        return res.json({ success: false, message: e.message })
    }
}



