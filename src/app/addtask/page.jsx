"use client"
import React, { useState } from 'react';
import Head from 'next/head'
import AddTaskStyle from '@/components/Header.module.css';
import Image from 'next/image';
import { addTask } from '@/services/taskService';
import { toast } from 'react-toastify';

const AddTask = () => {
    const [task, setTask] = useState({
        title: "",
        content: "",
        status: "none",
        //temprorary solution
        userId: "65c2a2afe0db26f292604c26",
    });

    async function handleAddTask(e) {
        e.preventDefault();

        // Validate task Data.
        try {
            const result = await addTask(task);
            console.log(result);
            toast.success("Your task is Added successfully!", {
                position: "top-center",
            });
            setTask({
                title: "",
                content: "",
                status: "none",
            })
        } catch (error) {
            console.log("Something went wrong", error);
            toast.error("Failed to Add task!", {
                position: "top-center",
            })
        }

    };
    return (
        <div className='grid grid-cols-12 justify-center'>
            {/* Head tag for adding  meta data */}
            <Head>
                <title>Add Task: Task Manager</title>
                <meta name="description" content="Adding tasks to Task Manager." />
                <meta name="keywords" content="todo, crud, task" />
            </Head>

            <div className='col-span-6 col-start-4 p-5'>
                <h1 className='text-5xl font-semibold text-center'>Add Your Task Here!!</h1>
                <Image src="/todo.svg" alt="Todo Icon" width={250} height={250} className='mx-auto my-8 ' />

                <form onSubmit={handleAddTask}>

                    <input type="text" className={AddTaskStyle.addTaskInput} placeholder="Task Title" name='taskTitle' value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />

                    <textarea name="taskContent" className={AddTaskStyle.addTaskInput} rows="5" cols="30" placeholder="Task Discription" value={task.content} onChange={(e) => setTask({ ...task, content: e.target.value })}></textarea>

                    <select name="" id="" className={AddTaskStyle.addTaskInput} value={task.status} onChange={(e) => setTask({ ...task, status: e.target.value })}>
                        <option value="none" selected disabled >--Select Status--</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button className='px-4 py-2 font-semibold text-lg bg-blue-600 rounded w-[45%] mx-2 hover:bg-blue-400' type='submit'>Add ToDo</button>
                    <button className='px-4 py-2 font-semibold text-lg bg-red-600 rounded w-[45%] mx-2 hover:bg-red-400' type='submit'>Clear</button>
                </form>
            </div>
        </div>
    )
}

export default AddTask;