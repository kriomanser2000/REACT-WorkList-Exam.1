import React, { useState } from 'react';
import './App.css';

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
        <form onSubmit={handleSubmit} className="add-project-form">
            <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Project Name"
                required
            />
            <button type="submit">Create</button>
        </form>
    );
};
export default AddProject;