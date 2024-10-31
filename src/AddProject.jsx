import React, { useState } from 'react';

const AddProject = ({ onProjectAdded }) => 
{
    const [projectName, setProjectName] = useState('');
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        const newProject = { name: projectName };
        fetch('http://localhost:5000/projects', 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProject),
        })
        .then(response => response.json())
        .then(data => 
        {
            console.log('Проект додано:', data);
            onProjectAdded();
            setProjectName('');
        })
        .catch(error => console.error('Помилка при додаванні проекту:', error));
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="projectName">Назва проекту:</label>
                <input
                    type="text"
                    id="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Додати проект</button>
        </form>
    );
};
export default AddProject;