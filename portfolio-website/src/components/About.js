import React from 'react'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about'>
                <h2>About Me</h2>
                <p>As a Full Stack Developer, I specialize in crafting responsive and dynamic user interfaces with React, Redux, and JavaScript.
                    On the back end, I bring experience in Node.js, Python, .NET, and C#, building robust and scalable applications. 
                    With a strong foundation in Agile methodologies and a passion for problem-solving, I thrive in collaborative environments. 
                    I am constantly seeking to refine my skills and contribute to impactful projects.
                </p>
            </div>
            <div className='details'>
                <h2>Details</h2>
                <p>
                    <h4>Name:</h4>
                    <p>Brayan Cordero</p>
                    <h4>Location:</h4>
                    <p>San Bernardino, CA</p>
                    <a href="https://github.com/BrayanCordero?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
            </div>
        </div>
    )
}

export default About;