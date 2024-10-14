import React, { useState, useEffect } from 'react';

const Projects = () => 
{
    const [projects, setProjects] = useState([]);
    useEffect(() => 
    {
        fetch('http://localhost:5000/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Помилка при отриманні проектів:', error));
    }, []);
    return (
        <div>
            <h2>Список проектів</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
};
export default Projects;