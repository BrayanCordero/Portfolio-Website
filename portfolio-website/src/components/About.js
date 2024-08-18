import React from 'react'
import '../styles/AboutStyle.css'

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
                <div className='skills'>
                    <div className='frontend'>
                        <h2>Frontend</h2>
                        <ul>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Angular</li>
                            <li>TypeScript</li>
                            <li>ASP.Net</li>
                            <li>HTML & CSS</li>
                        </ul>
                    </div>
                    <div className='backend'>
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
            </div>
            <div className='certifications'>
                <h1>Certifications</h1>
                <div className='certifications-card'>
                    <ul>
                        <li><a href="https://www.codecademy.com/profiles/L0rdLost/certificates/6c152bd262967f8c941c9707ed636bda" target="_blank" rel="noopener noreferrer">Python</a></li>
                        <li><a href="https://coursera.org/share/cd285a6c835268abec1d6ab014e1b799" target="_blank" rel="noopener noreferrer">JavaScript</a></li>
                        <li><a href="https://coursera.org/share/53cbe5a0c6f0697e37b3ee7ed2c8f555" target="_blank" rel="noopener noreferrer">Version Control</a></li>
                        <li><a href='https://www.codecademy.com/profiles/L0rdLost/certificates/43dd707594a64f9e8f93b727e16eb9dd' target="_blank" rel="noopener noreferrer">React</a></li>
                        <li><a href='https://www.codecademy.com/profiles/L0rdLost/certificates/6635cb9acaac43e3b713d72debc2149b' target='_black' rel='noopener noreferrer'>Redux</a></li>
                        <li><a href="https://coursera.org/share/86f1339ed69f3dc72701e7d3fd8fab21" target="_blank" rel="noopener noreferrer">HTML & CSS</a></li>
                    </ul>
                </div>
            </div>
            <div className='details'>
                <h1>Details</h1>
                <div className='details-content'>
                    <div className='detail-item'>
                        <h4>Education:</h4>
                        <p>California State Polytechnic University, Pomona</p>
                        <p>Bachelor's of Science Applied Mathematics</p>
                    </div>
                    <div className='detail-item'>
                        <h4>Location:</h4>
                        <p>California, US</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;