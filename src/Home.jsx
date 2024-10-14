import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import Project from './Project';
import TaskList from './TaskList';
import './App.css';

const Home = () => 
{
    const [projects, setProjects] = useState([]);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    useEffect(() => 
    {
        fetch('http://localhost:5000/projects')
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);
    const handleAddProject = (newProject) => 
    {
        setProjects([...projects, newProject]);
    };
    const handleProjectSelect = (projectId) => 
    {
        setSelectedProjectId(projectId);
    };
    return (
        <div>
            <h1>Менеджер справ</h1>
            <Project onAddProject={handleAddProject} />
            <h2>Список проектів</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id} onClick={() => handleProjectSelect(project.id)}>
                        {project.name}
                    </li>
                ))}
            </ul>
            <button onClick={() => setSelectedProjectId(null)}>Повернутися до всіх справ</button>
            {selectedProjectId && <TaskList projectId={selectedProjectId} />}
        </div>
    );
};
export default Home;