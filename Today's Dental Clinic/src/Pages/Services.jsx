import React from 'react'

const Services = () => {
    const services = [
        { title: 'General Checkups', icon: 'bi bi-shield-check', desc: 'Routine dental exams and cleanings' },
        { title: 'Teeth Whitening', icon: 'bi bi-brightness-high', desc: 'Birghten your smile with our whitening services.' },
        { title: 'Braces & Aligners', icon: 'bi bi-bounding-box', desc: 'Orthodontic solutions for perfect smile.' },
        { title: 'Root canal', icon: 'bi bi-droplet-half', desc: 'Pain relief and treatment of infected roots' },
        { title: 'Dental implants', icon: 'bi bi-box', desc: 'Restore missing teeth with implants' },
        { title: 'Pediatric Dentistry', icon: 'bi bi-emoji-smile', desc: 'Specialized care for children' },

    ]
    return (
        <div className='container my-5'>
            <h1 className='text-primary'>Our Services</h1>
            <div className='row'>
                {
                    services.map((services, idx) => (
                        <div key={idx} className='col-md-4 mb-4'>
                            <div className='card h-100 text-center'>
                                <div className='card-body'>
                                    <i className={`${services.icon} display-4 text-primary`}></i>
                                    <h5 className='mt-3 card-title'>{services.title}</h5>
                                    <p className='card-text'>{services.desc}</p>
                                </div>
                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Services