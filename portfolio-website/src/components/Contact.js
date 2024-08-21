import React, {useState} from 'react'
import '../styles/ContactStyle.css'

const Contact = () => {

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('')

    const Submit = (event) => {
        event.preventDefault();
        //handle submit

        setName('');
        setCompany('');
        setEmail('');
    };

    return (
        <div className='contact-container'>
            <div className='form-container'>
                <form onSubmit={Submit}>
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
                    <button type='submit' className='submit-btn'>Submit</button>
                    </div>
                </form>
                {/* <a href='https://www.linkedin.com/in/brayan-cordero-alvarez-a0a290206' target="_blank" rel="noopener noreferrer">LinkedIn</a> */}
            </div>
        </div>
    )
};


export default Contact