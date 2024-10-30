import React, { useState } from 'react';

const AddProject = ({ onAddProject }) => 
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
            <div>
                <label htmlFor="projectName">Назва проекту:</label>
                <input type="text" id="projectName" value={projectName} onChange={(e) => setProjectName(e.target.value)} required />
            </div>
            <button type="submit">Додати проект</button>
        </form>
    );
};
export default AddProject;