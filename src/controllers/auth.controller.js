// Sign up a new user

import CustomError from "../service/CustomError.js"
import asyncHandler from "../service/asyncHandler.js"
import User from "../models/user.schema.js"

export const cookieOptions = {
    expires: new Date(Date.now() + 3 * 24 * 60 *60 * 1000),
    httpOnly: true
}

export const signUp = asyncHandler(async (req, res) => {
    // get data from user

    const {name, email, password} = res.body

    // Validation
    if (!name || !email || !password) {
        throw new CustomError("Please add all the fields", 400)
    }

    // add more validation - assignment

    // now lets add the user to database

    // check if user already exists
    const existingUser = await User.findOne({email})

    if (existingUser) {
        throw new CustomError("User already exists", 400)
    }

    const user = await User.create({
        name,
        email,
        password
    })

    const token = user.getJWTtoken()

    // safety
    user.password = undefined

    // store this token in user's cookies
    res.cookie("token", token, cookieOptions)

    // send back a response to user
    res.status(200).json ({
        success: true,
        token,
        user
    })
})