import React from 'react'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about'>
                <p>As a Full Stack Engineer, I specialize in crafting responsive and dynamic user interfaces with React, Redux, and JavaScript.
                    On the back end, I bring experience in Node.js, Python, .NET, and C#, building robust and scalable applications. 
                    With a strong foundation in Agile methodologies and a passion for problem-solving, I thrive in collaborative environments. 
                    I am constantly seeking to refine my skills and contribute to impactful projects.
                </p>
            </div>
            <div className='skill-container'>
                <h1>Skills Overview</h1>
                <div className='frontend'>
                    <h2>Frontend</h2>
                    <ul>
                        <li>React/Redux</li>
                        <li>JavaScript</li>
                        <li>HTML & CSS</li>
                        <li>Angular</li>
                        <li>TypeScript</li>
                        <li>ASP.Net</li>
                    </ul>
                </div>
                <div className='Backend'>
                    <h2>Backend</h2>
                    <ul>
                        <li>Python</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>C#</li>
                        <li>ADO.Net</li>
                        <li>PostgresSQL</li>
                        <li>Microsoft SQL Server</li>
                    </ul>
                </div>
            </div>
            <div className='details'>
                <h2>Details</h2>
                <p>
                    <h4>Name:</h4>
                    <p>Brayan Cordero</p>
                    <h4>Education:</h4>
                    <p>Cal Poly Pomona</p>
                    <p>Bachelor's of Science Applied Mathematics</p>
                    <h2>Certifications:</h2>
                    <ul>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Version Control</li>
                        <li>HTML & CSS</li>
                    </ul>
                    <h4>Location:</h4>
                    <p>San Bernardino, CA</p>
                </p>
            </div>
        </div>
    )
}

export default About;