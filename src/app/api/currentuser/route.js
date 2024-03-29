import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/Models/user.model";
export async function GET(request) {
    const authToken = request.cookies.get("LoginToken")?.value;
    console.log(authToken);

    const data = jwt.verify(authToken, process.env.JWT_KEY)

    const user = await User.findById(data._id).select("-password");

    return NextResponse.json(user)
}