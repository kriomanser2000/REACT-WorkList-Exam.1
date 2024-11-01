import React, { useState, useEffect } from 'react';
import './App.css';
import AddProject from './AddProject';
import Projects from './Projects';
import { Routes, Route } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';
import EditProject from './EditProject';

const App = () => 
{
    const [projects, setProjects] = useState([]);
    useEffect(() => 
    {
        const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
        setProjects(storedProjects);
    }, []);
    useEffect(() => 
    {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);
    const handleProjectAdded = (newProject) => 
    {
        setProjects([...projects, newProject]);
    };
    const handleDeleteProject = (id) => 
    {
        setProjects(projects.filter(project => project.id !== id));
    };
    return (
        <div>
            <h1>Проектний менеджер</h1>
            <AddProject onProjectAdded={handleProjectAdded} />
            <Routes>
                <Route path="/" element={<Projects projects={projects} onDeleteProject={handleDeleteProject} />} />
                <Route path="/projects/edit/:projectId" element={<EditProject />} />
                <Route path="/projects/:projectId" element={<ProjectDetails />} />
            </Routes>
        </div>
    );
};
export default App;