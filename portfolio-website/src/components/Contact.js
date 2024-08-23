import React, {useState} from 'react'
import emailjs from '@emailjs/browser'
import '../styles/ContactStyle.css'
import {SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY} from '../assets/Constants'


const Contact = () => {

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const serviceId = SERVICE_ID;
        const templateId = TEMPLATE_ID;
        const publicKey = PUBLIC_KEY;

        const templateParams = {
            to_name: 'Brayan',
            from_name: name,
            from_email: email,
            from_company: company,
            message: message
        }
        
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setCompany('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });



    };

    return (
        <div className='contact-container'>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <div className='form'>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div className='form'>
                        <label htmlFor='company'>Company Name:</label>
                        <input type='text' id='company' name='company' value={company} onChange={(e) => setCompany(e.target.value)} required />
                    </div>

                    <div className='form'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>

                    <div className='form'>
                        <textarea cols={"30"} rows={"10"} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>

                    <div className='form'>
                    <button type='submit' className='submit-btn'>Submit</button>
                    </div>
                </form>
                {/* <a href='https://www.linkedin.com/in/brayan-cordero-alvarez-a0a290206' target="_blank" rel="noopener noreferrer">LinkedIn</a> */}
            </div>
        </div>
    )
};


export default Contact