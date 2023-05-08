import mongoose from "mongoose";
import orderStatus from "../utils/orderStatus";

const orderSchema = new mongoose.Schema({
    product: {
        type: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product"
                },
                count: Number,
                price: Number
            }
        ],
        required: true,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: ["true", "Please provide the User ID"]
        },
        address: {
            type: String,
            required: ["true", "Please provide the User Address"]
        },
        phoneNumber: {
            type: String,
            required: ["true", "Please provide User Phone Number"]
        },
        amount: {
            type: String,
            required: ["true", "Please provide the amount"]
        },
        coupon: String,
        transctionId: String,
        status: {
            type: String,
            enum: Object.values(orderStatus),
            default: orderStatus.ORDERED
        }
    }
}, {timestamps: true})

export default mongoose.model("Order", orderSchema)