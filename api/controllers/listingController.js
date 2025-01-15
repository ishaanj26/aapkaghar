import Listing from "../models/listingModel.js"

export const createListing = async (req, res) => {
    try {
        const listing = await Listing.create(req.body)
        return res.json({ success: true, listing });

    } catch (error) {
        return res.json({ success: false, message: `${error}` });
    }
}

export const updateListing = async (req, res) => {

    const { userId } = req.body;

    try {
        const listing = await Listing.findById(req.params.id)
        if (listing.userRef !== userId) {
            return res.json({ success: false, message: "You can't update this listing.You are not authorized." });
        }
        else {
            const updatedlist = await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        return res.json({ success: true, updatedlist });
        }
    } catch (e) {
        return res.json({ success: false, message: `Listing not found...try again later` })
    }
}

export const deleteListing = async (req, res) => {
    try {
        const { userId } = req.body;
        const listing = await Listing.findById(req.params.id)
        if (!listing) {
            return res.json({ success: false, message: "Listing not found" });
        }
        if (listing.userRef !== userId) {
            return res.json({ success: false, message: "You can't delete this listing.You are not authorized." });
        }
        try {
            await Listing.findByIdAndDelete(req.params.id)
            return res.json({ success: true, message: "Listing deleted" });
        } catch (e) {
            return res.json({ success: false, message: "Error deleting listing" });
        }

    } catch (error) {
        return res.json({ success: false, message: `Okay the error is ${error}` });
    }
}