import React from 'react';
import Image from 'next/image';

const AboutDeveloper = () => {
    return (
        <div className='flex flex-wrap items-center justify-center px-4 py-4'>
            <div className=''>
                <Image src="" className='rounded' alt='Profile Picture' height={150} width={150} />
                <h1>Diwakar Giri</h1>
            </div>
            <div className=''>
                <Image src="" className='rounded' alt='Profile Picture' height={150} width={150} />
                <h1>Diwakar Giri</h1>
            </div>
            <div className=''>
                <Image src="" className='rounded' alt='Profile Picture' height={150} width={150} />
                <h1>Diwakar Giri</h1>
            </div>
        </div>
    )
}

export default AboutDeveloper