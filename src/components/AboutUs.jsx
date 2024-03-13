import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-2/5 px-4 py-4 flex items-center justify-center'>
        <Image src="/about.jpg" className='rounded-lg' alt='About Us Image' height={300} width={450} />
      </div>
      <div className='w-3/5 px-24 py-3'>
        <h1 className='text-4xl font-semibold py-3'>About Task Manager</h1>
        <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt debitis hic ut ducimus eligendi natus nulla reprehenderit repellendus optio error vero minus qui eius iste libero labore voluptate, dolores molestiae veniam distinctio rem explicabo possimus repellat? Quaerat, dolore dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt debitis hic ut ducimus eligendi natus nulla reprehenderit repellendus optio error vero minus qui eius iste libero labore voluptate, dolores molestiae veniam distinctio rem explicabo possimus repellat? Quaerat, dolore dignissimos?</p>
        <button className='px-2 py-2 bg-orange-600 rounded my-4 font-semibold hover:bg-orange-500 hover:rounded-none'><Link href="/">Learn More</Link></button>
      </div>
    </div>
  )
}

export default AboutUs