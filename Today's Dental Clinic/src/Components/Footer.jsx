import React from 'react'

const Footer = () => {
    return (

        <footer className='fixed-bottom bg-dark-subtle text-white py-2 mt-4 text-center'>
            <p className='mb-0 text-dark'>© {new Date().getFullYear()} Dent2Teeth. All rights reserved.</p>
        </footer>

    )
}

export default Footer
