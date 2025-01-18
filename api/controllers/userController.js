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
                bookmarks:user.bookmarks,
                avatar:user.avatar
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching user details" });
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.json({ success: false, message: `User not found.Please try again.. ` });
        }
        const { password: pass, ...rest } = user._doc
        res.json({
            success: true,
            rest
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching user details" });
    }
}

export const addBookMarks = async (req, res) => {

    const { userId, listingId } = req.body;
    try {
        const user = await userModel.findById(userId);
        const listing = await Listing.findById(listingId);
        if (!user || !listing) {
            return res.json({ success: false, message: `User  or listing not found...try again later` });
        }
        // Check if listing is already bookmarked
        if (user.bookmarks.includes(listingId)) {
            return res.json({ success: false, message: `Listing is already bookmarked` });
        }
        // Add listing to user's bookmarks
        user.bookmarks.push(listingId);
        await user.save();
        res.json({ success: true, message: `Listing bookmarked successfully` });

    } catch (e) {
        return res.json({ success: false, message: `Error bookmarking listing...try again later` })
    }
}

export const removeBookmark = async (req, res) => {
    const { userId, listingId } = req.body;

    try {
        // Find the user by userId
        const user = await userModel.findById(userId);

        // Check if the user exists
        if (!user) {
            return res.json({ success: false, message: `User  not found. Please try again.` });
        }

        // Check if the listing is in the user's bookmarks
        if (!user.bookmarks.includes(listingId)) {
            return res.json({ success: false, message: `Listing is not bookmarked.` });
        }

        // Remove the listing from the user's bookmarks
        user.bookmarks = user.bookmarks.filter(bookmark => bookmark.toString() !== listingId);

        // Save the updated user document
        await user.save();

        // Return success response
        res.json({ success: true, message: `Listing removed from bookmarks successfully.` });

    } catch (error) {
        // Handle any errors
        res.status(500).json({ success: false, message: `Error removing bookmark. Please try again later.` });
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
        else {
            return res.json({ success: false, message: "You are not authorized to view this user" })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching user details" });
    }
}

