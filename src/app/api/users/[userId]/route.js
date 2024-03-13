import { NextResponse } from "next/server";
import { User } from "@/Models/user.model";
import { connectDB } from "@/helper/db";

connectDB();

//Find specific user by userId.
export const GET = async (request, { params }) => {
    const { userId } = params;

    try {

        const user = await User.findById(userId).select("-password");

        // return NextResponse.json({
        //     message: "user getting successfully",
        //     success: true,
        // })
        return NextResponse.json(user)

    } catch (error) {
        return NextResponse.json({
            message: "Error in Finding the Specific user",
            success: false,
        })
    }
}

//Delete user by userId.
export async function DELETE(request, { params }) {
    const { userId } = params;

    try {
        await User.deleteOne({
            _id: userId
        });

        return NextResponse.json({
            message: "user Deleted Successfully",
            success: true,
        })
    } catch (error) {
        return NextResponse.json({
            message: " Error in Deleting user!! ",
            success: false,
        });
    }
}

//Update user by userId.
export const PUT = async (request, { params }) => {
    const { userId } = params;

    try {

        const { name, password, about, profileURL } = await request.json();

        const user = await User.findById(userId)

        user.name = name;
        user.password = password;
        user.about = about;
        user.profileURL = profileURL;

        const updatedUser = await user.save();

        return NextResponse.json(updatedUser);

    } catch (error) {
        console.log();
        return NextResponse.json({
            message: "Error in updating the user",
            success: false,
        })
    }
}