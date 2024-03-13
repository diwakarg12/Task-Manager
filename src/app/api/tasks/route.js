import { connectDB } from "@/helper/db";
import { getResponse } from "@/helper/responseMessage";
import { Task } from "@/Models/task.model";
import { NextResponse } from "next/server";

connectDB();

export const GET = async (request) => {
    let tasks = [];
    try {

        tasks = await Task.find();
        return NextResponse.json(tasks);

    } catch (error) {
        return getResponse("Error in Getting Data", 404, false)
    }
}

export const POST = async (request) => {
    // Get data from body
    try {

        const { title, content, userId } = await request.json();
        const task = new Task({
            title, content, userId,
        })

        const createdTask = await task.save();

        return NextResponse.json(createdTask, {
            message: "Task Added successfully",
            status: 201,
            success: true,
        })

    } catch (error) {
        return getResponse("Failed to get the task", 404, false)
    }
}

