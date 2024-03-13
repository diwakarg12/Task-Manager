import { NextResponse } from "next/server";
import { User } from "@/Models/user.model.js"
import { connectDB } from "@/helper/db";
import bcrypt from 'bcryptjs';

connectDB();

export async function GET(request) {

    let users = [];

    try {
        users = await User.find().select("-password");
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to get user",
            success: false,
        })
    }

    return NextResponse.json(users);
}

export async function POST(request) {
    //fetch user detail from request.
    const { name, email, password, about, profileURL } = await request.json()

    //create user object with user model
    const user = new User({
        name, email, password, about, profileURL,
    });

    try {
        user.password = bcrypt.hashSync(user.password, 10);
        //save the object to database.
        const createdUser = await user.save();

        const response = NextResponse.json(user, {
            status: 201
        });

        return response;
    } catch (error) {
        console.log("Error", error);
        return NextResponse.json({
            message: "Failed to created user !!",
            status: false,
        }, {
            status: 500,
        })
    }
}