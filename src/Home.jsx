import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Project from './Project'; 
import './App.css';

const Home = () => 
{
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    useEffect(() => 
    {
        fetch('http://localhost:5000/projects')
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);
    const handleAddProject = (newProject) => 
    {
        fetch('http://localhost:5000/projects', 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProject),
        })
        .then(response => response.json())
        .then(data => 
        {
            setProjects([...projects, data]);
        })
        .catch(error => console.error('Помилка при додаванні проекту:', error));
    };
    const handleProjectSelect = (projectId) => 
    {
        setSelectedProjectId(projectId);
    };
    return (
        <div>
            <h1>Менеджер справ</h1>
            <Project onAddProject={handleAddProject} />
            {/* Список проектів */}
            <h2>Список проектів</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
            {/* Додати справу, якщо проект вибрано */}
            {tasks.length > 0 && <AddTask tasks={tasks} />}
        </div>
    );
};
export default Home;