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

export const getListing = async (req, res) => {

    const { userId } = req.body;

    try {
        const listing = await Listing.findById(req.params.id)
        if (!listing) {
            return res.json({ success: false, message: "No listings have been found" });
        }
        return res.json({ success: true, listing });
    } catch (e) {
        return res.json({ success: false, message: `Listing not found...try again later ERROR IS--->${e}` })
    }
}

export const getAllListingsforSearch = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 9
        const startIndex = parseInt(req.query.startIndex) || 0

        let offer = req.query.offer
        if (offer === 'false' || offer === undefined) {
            offer = { $in: [false, true] }
        }

        let furnished = req.query.furnished
        if (furnished === 'false' || furnished === undefined) {
            furnished = { $in: [false, true] }
        }

        let parking = req.query.parking
        if (parking === 'false' || parking === undefined) {
            parking = { $in: [false, true] }
        }

        let type = req.query.type
        if (type === undefined || type === 'all') {
            type = { $in: ['sale', 'rent'] }
        }

        const searchTerm = req.query.searchTerm || ''

        const sort = req.query.sort || 'createdAt'

        const order = req.query.order || 'desc'

        const listings = await Listing.find({
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } },
                { description: { $regex: searchTerm, $options: 'i' } },
                { address: { $regex: searchTerm, $options: 'i' } }
            ],
            offer, furnished, parking, type,
        }).sort({
            [sort]: order
        }).limit(
            limit
        ).skip(startIndex)

        return res.json({ success: true, listings });
    } catch (e) {
        return res.json({ success: false, message: `Listing not found...try again later` })
    }
}

export const AllListingsforBookMark = async (req, res) => {
    try {
        const { bookmarkIds } = req.body; // Array of listing IDs from the user's bookmark list
        if (!bookmarkIds || bookmarkIds.length === 0) {
            return res.json({ success: false, message: "No bookmark IDs provided" });
        }
        const listings = await Listing.find({ _id: { $in: bookmarkIds } });

        if (!listings || listings.length === 0) {
            return res.json({ success: false, message: "No listings found for the provided bookmark IDs" });
        }
        return res.json({ success: true, listings });
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