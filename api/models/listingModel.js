import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
    address: {
        type: String,
    },
    amenities: {
        type: Array,
    },
    approval: {
        type: String,
    },
    bedrooms: {
        type: String,
    },
    bathrooms: {
        type: String,
    },
    country: {
        type: String,
    },
    description: {
        type: String,
    },
    file_attachment: {
        type: Array,
    },
    no_of_parking_spaces: {
        type: String,
    },
    images: {
        type: [{ url: String }],
    },
    map_location: {
        type: String,
    },
    neighborhood: {
        type: String,
    },
    no_of_service_quarter: {
        type: String,
    },
    price: {
        type: String,
    },
    size: {
        type: String,
    },
    sold: {
        type: Boolean,
    },
    state: {
        type: String,
    },
    status: {
        type: String,
    },
    title: {
        type: String,
    },
    type: {
        type: Array,
    },
    video_url: {
        type: String,
    },
    whats_nearby: {
        type: Array,
    },
    yearBuilt: {
        type: String,
    },
    zip_code: {
        type: String,
    },
    userRef: {
        type: String,
    },
    furnishing_status: {
        type: String,

    },
    construction_status: {
        type: String,
    }, 
      floor_number: {
          type: String,
      },
      /*
      tags: {
          type: Array,
      }
          */

}, { timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;