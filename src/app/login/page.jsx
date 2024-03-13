"use client"
import Image from 'next/image';
import SignupStyle from '@/components/Header.module.css';
import Head from 'next/head';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { signIn } from "@/services/userService"
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();

    const [login, setLogin] = useState({
        email: "",
        password: "",
    })

    const handleLogin = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(login.email)) {
            toast.warning("email cannot  be empty and must be in the format example@domain.com", {
                position: "top-center"
            });
            return;
        }
        if (login.password.length < 8) {
            toast.error('Password should contain at least 8 characters', {
                position: "top-center"
            });
            return;
        }

        try {

            //valid data.
            const result = await signIn(login);
            console.log(result);
            toast.success("Logged In", {
                position: "top-center",
            })

            //redirect to  dashboard page after successful login.
            router.push("/profile/user");

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, {
                position: "top-center",
            });
        }


    }

    const resetForm = () => {
        setLogin({
            email: "",
            password: "",
        })
    }

    return (
        <div className='grid grid-cols-12 justify-center py-28'>
            <Head>
                <title>Login: Task Manager</title>
                <meta name="description" content="Login Form for Task Manager" />
                <meta name='keywords' content='Login, access, task-manager' />
            </Head>

            <div className='col-span-6 col-start-4 p-5'>
                <h1 className='text-4xl font-semibold text-center'>Login to Get Access !</h1>
                <Image src="/login.svg" alt="Signup logo" width={250} height={250} className='mx-auto my-8 ' />

                <form onSubmit={handleLogin}>
                    <input type='email' name='email' placeholder='Email...' className={SignupStyle.signupInput} value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} />

                    <input type='password' name='password' placeholder='Password...' className={SignupStyle.signupInput} value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} />

                    <button className='px-4 py-2 font-semibold text-lg bg-green-600 rounded w-[45%] mx-2 hover:bg-green-400' type='submit'>Login</button>
                    <button onClick={resetForm} className='px-4 py-2 font-semibold text-lg bg-red-600 rounded w-[45%] mx-2 hover:bg-red-400' type='button'>Clear</button>
                </form>
                {/* {JSON.stringify(login)} */}
            </div>
        </div>
    )
}

export default Login