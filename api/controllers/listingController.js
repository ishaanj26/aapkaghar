import Listing from "../models/listingModel.js"

export const createListing = async (req, res) => {
    try {
        const listing = await Listing.create(req.body)
        return res.json({ success: true,listing});
        
    }catch(error){
        return res.json({ success: false, message: `${error}` });
    }
}