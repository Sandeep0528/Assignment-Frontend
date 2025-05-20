import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('https://jsonplaceholder.typicode.com/posts', form)
            setSubmitted(true)
        } catch (error) {
            console.error('Error submitting form', error)
        }
    }
    return (
        <div className='container my-5'>

            <h1 className='text-primary'>Contact us</h1>
            {submitted && <p className='alert alert-success'>Message sent successfully !</p>}

            <form onSubmit={handleSubmit} className='row g-3'>
                <div className='col-md-6'>
                    <input name='name' className='form-control' placeholder='Name' onChange={handleChange} required />
                </div>
                <div className='col-md-6'>
                    <input name='email' className='form-control' placeholder='Email' onChange={handleChange} required />
                </div>
                <div className='col-12'>
                    <input name='subject' className='form-control' placeholder='Subject' onChange={handleChange} required />
                </div>
                <div className='col-12'>
                    <input name='message' className='form-control' placeholder='Message' onChange={handleChange} required />
                </div>
                <div className='col-12'>
                    <button className='btn btn-primary' type='submit'>Send Message</button>
                </div>
            </form>
            <div className='mt-5'>
                <p><strong>Phone:</strong>+91 9121083057</p>
                <p><strong>Email:</strong>todaysdentalclinic@gmail.com</p>
                <p><strong>Address:</strong>Phase no 2 Banjara hills, Hyderabad</p>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97863.87343010059!2d78.37418223831764!3d17.42625186906481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c348bb9b27%3A0x3ab4891660fff007!2sToothCare%20Dental%20Hospital!5e1!3m2!1sen!2sin!4v1747725350033!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title='Clinic location'
                ></iframe>
            </div>
        </div>
    )
}

export default Contact