import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
        {
            path: '/',
            element: <HomePage/>, 
        },
        {
            path: '/about',
            element: <AboutPage />,
        },
        {
            path: '/projects',
            element: <ProjectsPage />,
        },
        {
            path: '/contact',
            element: <ContactPage />,
        },
        ],
    },
]);

export default router;
