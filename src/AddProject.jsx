import React, { useState } from 'react';

const AddProject = ({ onProjectAdded }) => 
{
    const [projectName, setProjectName] = useState('');
    const handleSubmit = (event) => 
    {
        event.preventDefault();
        const newProject = { id: Date.now(), name: projectName };
        onProjectAdded(newProject);
        setProjectName('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Назва проекту"
                required
            />
            <button type="submit">Додати проект</button>
        </form>
    );
};
export default AddProject;