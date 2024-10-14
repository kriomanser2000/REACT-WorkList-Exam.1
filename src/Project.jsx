import React, { useState } from 'react';

const Projects = () => 
{
    const [projects, setProjects] = useState([]);
    const [projectName, setProjectName] = useState("");
    const handleAddProject = () => 
    {
        const newProject = { id: projects.length + 1, name: projectName, tasks: [] };
        setProjects([...projects, newProject]);
        setProjectName("");
    };
    return (
        <div>
            <h2>Список проектів</h2>
            <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Назва проекту"
            />
            <button onClick={handleAddProject}>Додати проект</button>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
};
export default Projects;