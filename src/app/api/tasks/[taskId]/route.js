import { connectDB } from "@/helper/db";
import { getResponse } from "@/helper/responseMessage";
import { Task } from "@/Models/task.model";
import { NextResponse } from "next/server";

connectDB();

export const GET = async (request, { params }) => {
    const { taskId } = params;

    try {

        const task = await Task.findById(taskId);

        return NextResponse.json(task);

    } catch (error) {
        return getResponse("Error in Getting task", 404, false)
    }
}

export const DELETE = async (request, { params }) => {
    const { taskId } = params;
    try {
        const task = await Task.deleteOne({ _id: taskId });

        return getResponse("Task Deleted !!", 201, true)
    } catch (error) {
        return getResponse("Failed to Delete the task", 500, false)
    }
}

export const PUT = async (request, { params }) => {
    const { taskId } = params;

    try {

        const { title, content, status } = await request.json();
        let task = await Task.findById(taskId);

        task.title = title;
        task.content = content;
        task.status = status;

        const updatedTask = await task.save();

        return NextResponse.json(updatedTask);
    } catch (error) {
        return ErrorResponse("Failed to Update Task", 500, false)
    }
}

