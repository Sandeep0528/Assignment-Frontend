import React from 'react'
import FAQ from '../Components/FAQ.jsx'
const About = () => {
    return (

        <div className='container my-5'>

            <h1 className='text-primary'>About Us</h1>
            <p>we are a team of experienced dentists providing top-notch care.</p>

            <h2 className='text-primary'>Our Practitioners </h2>
            <ul>
                <li>Dr.Surya Parkash - Cosmetic Dentist</li>
                <li>Dr.Anjana Kumar - Orthodontist</li>
            </ul>

            <h2 className='text-primary'>Our Philosophy</h2>
            <p>We believe in compassionate , quality dental care for everyone.</p>
            <FAQ />
        </div>

    )
}

export default About