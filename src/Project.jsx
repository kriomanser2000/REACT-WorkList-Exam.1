import React, { useState } from 'react';

const Project = ({ onAddProject }) => 
{
    const [projectName, setProjectName] = useState('');
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        const newProject = { name: projectName };
        onAddProject(newProject);
        setProjectName('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Назва проекту"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                required
            />
            <button type="submit">Додати проект</button>
        </form>
    );
};
export default Project;