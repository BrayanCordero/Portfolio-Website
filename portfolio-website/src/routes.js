import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage';
import ContactPage from './Pages/ContactPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
        {
            path: '/',
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
