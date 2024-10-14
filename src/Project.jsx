import React, { useState, useEffect } from 'react';

const Projects = ({ projects }) =>
{
    return (
        <div>
            <h2>Список проектів</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
};
useEffect(() => 
{
    console.log('Fetching projects...');
    fetch('http://localhost:5000/projects')
        .then(response => response.json())
        .then(data => 
        {
            console.log('Received projects:', data);
            setProjects(data);
        })
        .catch(error => console.error('Помилка при отриманні проектів:', error));
}, []);
export default Projects;