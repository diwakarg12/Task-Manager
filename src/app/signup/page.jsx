"use client"
import { useState } from 'react';
import Image from 'next/image';
import SignupStyle from '@/components/Header.module.css';
import Head from 'next/head';
import { toast } from 'react-toastify';
import { signUp } from '@/services/userService';

const Signup = () => {
    const [signup, setSignup] = useState({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
    })

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (signup.name.trim() === "" || signup.name == null) {
            toast.warning("Name cannot be empty!", {
                position: "top-center",
            });
            return;
        }
        if (signup.email.indexOf("@") === -1 || signup.email.lastIndexOf(".") === -1) {
            toast.warning("Please enter a valid Email address.", {
                position: "top-center",
            });
            return;
        }
        if (signup.password.length < 8) {
            toast.warning("Password cannot be less than 8 Characters!", {
                position: "top-center",
            });
            return;
        }
        if (signup.about.trim() === "" || signup.about == null) {
            toast.warning("About cannot be empty", {
                position: "top-center",
            })
            return;
        }


        try {
            const result = await signUp(signup);
            toast.success("User is Registered!", {
                position: "top-center",
            })
        } catch (error) {
            toast.error("Signup Error ", {
                position: "top-center",
            })
        }

        setSignup({
            name: "",
            email: "",
            password: "",
            about: "",
        })

    }

    const resetForm = () => {
        setSignup({
            name: "",
            email: "",
            password: "",
            about: "",
        })
    }
    return (
        <div className='grid grid-cols-12 justify-center'>
            <Head>
                <title>Signup: Task Manager</title>
                <meta name="description" content="Signup Form for Task Manager" />
                <meta name='keywords' content='signip, register access task-manager' />
            </Head>

            <div className='col-span-6 col-start-4 p-5'>
                <h1 className='text-4xl font-semibold text-center'>Register Yourself Here !</h1>
                <Image src="/signup.svg" alt="Signup logo" width={200} height={200} className='mx-auto my-8 ' />

                <form onSubmit={handleSignUp}>

                    <input type='text' name='username' placeholder='Username...' className={SignupStyle.signupInput} onChange={(e) => setSignup({ ...signup, name: e.target.value, })} value={signup.name} />

                    <input type='email' name='email' placeholder='Email...' className={SignupStyle.signupInput} onChange={(e) => setSignup({ ...signup, email: e.target.value, })} value={signup.email} />

                    <input type='password' name='password' placeholder='Password...' className={SignupStyle.signupInput} onChange={(e) => setSignup({ ...signup, password: e.target.value, })} value={signup.password} />

                    <textarea name="about" cols="30" rows="5" className={SignupStyle.signupInput} placeholder="About you" onChange={(e) => setSignup({ ...signup, about: e.target.value, })} value={signup.about}></textarea>

                    <button className='px-4 py-2 font-semibold text-lg bg-blue-600 rounded w-[45%] mx-2 hover:bg-blue-400' type='submit'>Signup</button>

                    <button type='button' onClick={resetForm} className='px-4 py-2 font-semibold text-lg bg-red-600 rounded w-[45%] mx-2 hover:bg-red-400'>Clear</button>
                </form>
            </div>
        </div>
    )
}

export default Signup