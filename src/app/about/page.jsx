import AboutContact from '@/components/AboutContact'
import AboutDeveloper from '@/components/AboutDeveloper'
import AboutUs from '@/components/AboutUs'
import React from 'react'

export const metadata = {
    title: "About: Task Manager",
    discription: "About section of the Task manager Application"
}

const About = () => {
    return (
        <div>
            <AboutUs />
            <AboutDeveloper />
            <AboutContact />
        </div>
    )
}

export default About