import userModel from "../models/userModel.js";

export const getUserData = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await userModel.findById(userId);
        if (!user) {
            return res.json({ success: false, message: `User not found.Please try again..${userId} ` });
        }
        res.json({
            success: true,
            userData: {
                name: user.name,
                isAccountVerified: user.isAccountVerified,
                _id:user._id,
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching user details" });
    }
}