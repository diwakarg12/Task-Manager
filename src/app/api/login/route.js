import { User } from "@/Models/user.model";
import { NextResponse } from 'next/server'
import { compareSync } from 'bcryptjs'
import jwt from 'jsonwebtoken'

export async function POST(request) {
    const { email, password } = await request.json();

    try {
        //find user from given email.
        const user = await User.findOne({
            email: email,
        });

        if (!user) {
            throw new Error("User not found!");
        }

        //compare given password with user password
        const matched = compareSync(password, user.password); // Use compareSync directly

        if (!matched) {
            throw new Error("Password not matched!!")
        }

        //Generate jwt token
        const jwtToken = jwt.sign({
            _id: user._id,
            name: user.name
        }, process.env.JWT_KEY);

        console.log(jwtToken);

        //
        const response = NextResponse.json({
            message: "Login successFully",
            success: true,
        }, {
            status: 200,
        })

        response.cookies.set("LoginToken", jwtToken, {
            expiresIn: "1d",
            httpOnly: true,
        })

        return response;

    } catch (error) {
        return NextResponse.json({
            message: error.message,
            success: false,
        }, {
            status: 500,
        });
    }
}