import { Task } from "@/Models/task.model";
import { getResponse } from "@/helper/responseMessage";
import { NextResponse } from "next/server"

export const GET = async (request, { params }) => {
    const { userId } = params;

    try {
        const tasks = await Task.find({
            userId: userId,
        });
        return NextResponse.json(tasks);
    } catch (error) {
        return getResponse("Failed to get the User task", 404, false);
    }
}