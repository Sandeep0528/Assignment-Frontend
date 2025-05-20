import React from 'react'

const Home = () => {
    return (
        <div className='container my-5' >
            <section className='text-center bg-light p-3 rounded'>
                <img className='img-fluid' src='https://media.istockphoto.com/id/1395212837/photo/happy-woman-visiting-a-dentist-office.jpg?s=612x612&w=0&k=20&c=RTV_WRiAoCaaP9C5TVxzXwWwBlrmVDT8lnaSaY-XWX0= ' width={960} height={600} />
                <div >
                    <h1>Welcome to  Today's Dental Clinic</h1>
                    <p> Your smile, our passion</p>
                    <a className='btn btn-primary mt-3' href="/contact">Book Appointment</a>
                </div>
            </section>

            <section className='mt-5'>
                <h2 className='text-primary dispaly-5'>Our Services</h2>
                <p className='lead'>We offer a range of dental services to keep your smile healthy.</p>
                <ul className='card-title'>
                    <li>General Dentistry</li>
                    <li>Cosmetic Dentisty</li>
                    <li>Orthodontics</li>
                </ul>
            </section>
            <section className='mt-5 service' >
                <h2 className='text-primary card-title'>About our clinic</h2>
                <p>At Todays Dental, we are dedicated to helping you achieve and maintain a healthy, beautiful smile. With a patient-first approach, modern technology, and a caring team of professionals, we provide comprehensive dental care in a warm, welcoming environment. From routine checkups to advanced cosmetic procedures, we ensure your comfort and satisfaction every step of the way.
                </p>
            </section>
        </div>
    )
}

export default Home