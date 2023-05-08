import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ["true", "Product Name is required"],
        trim: true,
        maxLength: [120, "Product Name must be less than 120 characters"]
    },

    price: {
        type: String,
        required: ["true", "Product Price is required"],
        maxLength: [5, "Product Name must be less than 5 characters"]
    },

    description: {
        type: String
    },

    photos: [
        {
            secure_url: {
                type: String,
                required: true
            }
        }
    ],

    stock: {
        type: Number,
        default: 0
    },

    sold: {
        type: Number,
        default: 0
    },

    collectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection"
    }
}, {timestamps: true})

export default mongoose.model("Product", productSchema)