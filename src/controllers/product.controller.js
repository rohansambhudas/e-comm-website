import Product from "../models/product.schema.js"
import formidable from "formidable"
import {s3FileUpload, s3deleteFile} from "../service/imageUpload.js"
import mongoose from "mongoose"
import asyncHandler from "../service/asyncHandler.js"
import CustomError from "../service/CustomError.js"
import config from "../config/index.js"


/*****************************************************************
 * @ADD_PRODUCT
 * @route https://localhost:5000/api/product
 * @description Controller used for creating a new product
 * @description Only admin can create a coupon 
 * @description Uses AWS s3 Bucket for image upload
 * @returns Product Object
******************************************************************/

export const addProduct = asyncHandler(async (req, res) => {
    const form = formidable({multiples: true, keepExtensions: true})

    form.parse(req, async function (err, fields, files) {
        if (err) {
            throw new CustomError(err.message || "Something went wrong", 500)
        }

        let productId = new mongoose.Types.ObjectId().toHexString()
    })
})