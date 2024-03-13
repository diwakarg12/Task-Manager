"use client"
import React, { useState } from 'react'
import AboutStyle from './Header.module.css';

const AboutContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Hello ${name}! We have received your message.`);
    };

    return (
        <div className='flex items-center justify-center px-4 py-4'>
            <div className='py-6 m-auto w-1/2'>
                <h1 className='text-4xl font-semibold ml-16'>Contact us</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" className={AboutStyle.formInput} value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    <input type="email" className={AboutStyle.formInput} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                    <input type="number" className={AboutStyle.formInput} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
                    <textarea name="message" className={AboutStyle.formInput} value={message} onChange={(e) => setMessage(e.target.value)} id="message" rows="5" cols="30" placeholder="Message"></textarea>
                    <button className='px-4 py-2 font-semibold text-lg bg-green-600 rounded w-[80%] ml-[4.3rem] hover:bg-green-500' type='submit'>Submit</button>
                </form>
            </div>
            <div className='flex flex-col items-center justify-center w-1/2 py-6'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.18624346394486!2d84.88410849033112!3d25.96869970445015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992cb90e583f6f1%3A0x12d8320a89208eee!2sRamdayal%20Giri!5e0!3m2!1sen!2sin!4v1707332061220!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default AboutContact