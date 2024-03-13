"use client"
import React from 'react'
import Link from 'next/link'
import FooterStyle from './Header.module.css'
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-blue-600 py-6 px-4'>
      <div className=' flex items-center justify-around w-full'>
        <div className='w-1/2'>
          <h1 className='text-2xl font-bold'>Welcome to Task Manager</h1>
          <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio magni, incidunt quis aspernatur adipisci ullam doloremque est temporibus quas molestiae. Hic, officiis accusantium earum porro est ipsa excepturi magni vero laboriosam fuga voluptas nulla rem asperiores tempora iste officia error!</p>
        </div>
        <div className='flex flex-col justify-center gap-y-8 text-white'>
          <div>
            <h1 className='text-2xl font-semibold pb-3'>Important Links</h1>
            <ul className='flex items-center'>
              <li className={FooterStyle.footerli}><Link href="">About</Link></li>
              <li className={FooterStyle.footerli}><Link href="">Developers</Link></li>
              <li className={FooterStyle.footerli}><Link href="">Team</Link></li>
              <li className={FooterStyle.footerli}><Link href="">Team</Link></li>
            </ul>
          </div>
          <div>
            <h1 className='text-2xl font-semibold pb-3'>Social Links</h1>
            <ul className='flex items-center '>
              <li className={FooterStyle.social}><Link href=""><IoLogoFacebook /></Link></li>
              <li className={FooterStyle.social}><Link href=""><FaInstagramSquare /></Link></li>
              <li className={FooterStyle.social}><Link href=""><FaLinkedin /></Link></li>
              <li className={FooterStyle.social}><Link href=""><FaYoutubeSquare /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='py-6 text-center text-lg font-medium'>
        <p>&copy; 2024 <Link href="/" className='text-orange-500 font-bold text-xl'>Task Manager</Link> . All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer