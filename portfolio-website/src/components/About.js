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
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Angular</li>
                        <li>TypeScript</li>
                        <li>ASP.Net</li>
                        <li>HTML & CSS</li>
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
                        <a href="https://www.codecademy.com/profiles/L0rdLost/certificates/6c152bd262967f8c941c9707ed636bda" target="_blank" rel="noopener noreferrer"><li>Python</li></a>
                        <a href="https://coursera.org/share/cd285a6c835268abec1d6ab014e1b799" target="_blank" rel="noopener noreferrer"><li>JavaScript</li></a>
                        <a href="https://coursera.org/share/53cbe5a0c6f0697e37b3ee7ed2c8f555" target="_blank" rel="noopener noreferrer"><li>Version Control</li></a>
                        <a href='https://www.codecademy.com/profiles/L0rdLost/certificates/43dd707594a64f9e8f93b727e16eb9dd' target="_blank" rel="noopener noreferrer"><li>React</li></a>
                        <a href='https://www.codecademy.com/profiles/L0rdLost/certificates/6635cb9acaac43e3b713d72debc2149b' target='_black' rel='noopener noreferrer'><li>Redux</li></a>
                        <a href="https://coursera.org/share/86f1339ed69f3dc72701e7d3fd8fab21" target="_blank" rel="noopener noreferrer"><li>HTML & CSS</li></a>
                    </ul>
                    <h4>Location:</h4>
                    <p>San Bernardino, CA</p>
                </p>
            </div>
        </div>
    )
}

export default About;