import Listing from "../models/listingModel.js";
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
                _id: user._id,
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching user details" });
    }
}

export const getUserListings = async (req, res) => {
    const { userId } = req.body;
    try {
        if (userId === req.params.id) {
            // return res.json({ success: false, message: "You are not authorized to view this user" })
            const listings = await Listing.find({ userRef: req.params.id })
            return res.json({ success: true, listings })
        }
        else{
            return res.json({ success: false, message: "You are not authorized to view this user" })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching user details" });
    }
}