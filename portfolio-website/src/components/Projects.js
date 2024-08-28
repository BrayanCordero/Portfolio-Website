import React from 'react';
import '../styles/ProjectsStyle.css'

const Projects = () => {
    return (
        <div className='projects'>
            <div className='groove'>
                <h1><a href="https://github.com/BrayanCordero/GrooveGenie" target="_blank" rel="noopener noreferrer">GooveGenie</a></h1>
                <p>GooveGenie is a web application that allows users to search for tracks, create custom playlist, and save them to their Spotify account. 
                    This project uses React for the front-end development and integrates with the Spotify API to fetch track information and 
                    save playlist to user account.
                </p>
                <div className='tech-container'>
                    <h2>Tech Stack</h2>
                    <div className='tech-details'>
                        <ul>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Spotify API</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='sales'>
                <h1><a href="https://github.com/BrayanCordero/sales-report-clean-up" target="_blank" rel="noopener noreferrer">Sales Report Script</a></h1>
                <p>The Sales Report Script is designed to clean and organize sales reports to ensure data integrity and usability. 
                    The goal is to automate the process of cleaning sales data, making it ready for analysis and reporting.
                </p>
                <div className='tech-container'>
                    <h2>Tech Stack</h2>
                    <div className='tech-details'>
                        <ul>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='candy-shop'>
            <h1><a href="https://github.com/BrayanCordero/Shop-Console-App" target="_blank" rel="noopener noreferrer">Candy Shop Application</a></h1>
                <p>The Candy Shop Console App is a console-based application designed to manage an online store's inventory, orders, 
                    and customer data. It enables users to perform various CRUD operations on products and orders. 
                    Managers can easily update inventory, add new products, and remove items, providing a simple and efficient solution 
                    for managing shop operations.
                </p>
                <div className='tech-container'>
                    <h2>Tech Stack</h2>
                    <div className='tech-details'>
                        <ul>
                            <li>C#</li>
                            <li>ASP.Net</li>
                            <li>ADO.Net</li>
                            <li>AWS RDS</li>
                            <li>Microsoft SQL Server</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='more'>
                <h2>More Projects</h2>
                <a href="https://github.com/BrayanCordero?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    )
}

export default Projects;

