import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-secondary d-flex flex-column flex-md-row">
                <div className="container-fluid">
                    <Link className='navbar-brand' id='title' to='/'>Today's Dental Clinic</Link>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav ms-auto">
                            <li className='nav-item'><Link className='nav-link text-dark-subtle me-md-3 mb-2 mb-md-0 text-decoration-none' to='/'>Home</Link></li>
                            <li className='nav-item'><Link className='nav-link text-dark-subtle me-md-3 mb-2 mb-md-0 text-decoration-none' to='about'>About</Link></li>
                            <li className='nav-item'><Link className='nav-link text-dark-subtle me-md-3 mb-2 mb-md-0 text-decoration-none' to='services'>Services</Link></li>
                            <li className='nav-item'><Link className='nav-link text-dark-subtle me-md-3 mb-2 mb-md-0 text-decoration-none' to='contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
