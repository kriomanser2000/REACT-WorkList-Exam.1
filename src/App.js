import React, { useState, useEffect } from 'react';
import './App.css';
import AddProject from './AddProject';
import { Routes, Route } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';
import EditProject from './EditProject';
import Sidebar from './Sidebar';
import Navbar from './Navbar';


const App = () => 
{
    const [projects, setProjects] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [newProjectName, setNewProjectName] = useState('');
    const [showProjectControls, setShowProjectControls] = useState(false);
    useEffect(() => 
    {
        const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
        setProjects(storedProjects);
    }, []);
    useEffect(() => 
    {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);
    const handleProjectAdded = () => 
    {
        if (newProjectName) 
        {
            const newProject = 
            {
                id: Date.now(),
                name: newProjectName,
                tasks: [],
            };
            setProjects([...projects, newProject]);
            setNewProjectName('');
        }
    };
    const handleDeleteProject = (id) => 
    {
        const updatedProjects = projects.filter(project => project.id !== id);
        setProjects(updatedProjects);
        localStorage.setItem('projects', JSON.stringify(updatedProjects));
        if (updatedProjects.length === 0) 
        {
                window.location.href = '/';
        }
    }; 
    const toggleProjectControls = () => 
    {
        setShowProjectControls(prev => !prev);
    };
    const handleSearch = (term) => 
    {
        const allTasks = projects.flatMap(project => project.tasks);
        const results = allTasks.filter(task => 
        {
            return (
                task.taskName.includes(term) ||
                task.description.includes(term) ||
                task.tags.some(tag => tag.includes(term)) ||
                task.priority.includes(term)
            );
        });
        setFilteredTasks(results);
    };
    return (
        <div className="app-container">
            <Navbar 
                newProjectName={newProjectName} 
                setNewProjectName={setNewProjectName} 
                handleProjectAdded={handleProjectAdded} 
                toggleProjectControls={toggleProjectControls} 
                showProjectControls={showProjectControls} 
                handleSearch={handleSearch}
            />
            <div className="main-content">
                <Sidebar 
                    projects={projects} 
                    onSelectProject={(projectId) => 
                    {
                        window.location.href = `/projects/${projectId}`;
                    }} 
                    onDeleteProject={handleDeleteProject}
                />
                <div className="content-area">
                    {showProjectControls && (
                        <div>
                            <h3 style={{color:'white'}}>Create a New Project</h3>
                            <input type="text" value={newProjectName} onChange={(e) => setNewProjectName(e.target.value)} placeholder="Project name" />
                            <button onClick={handleProjectAdded}>Create Project</button>
                        </div>
                    )}
                    <Routes>
                        <Route path="/" element={<h2>Select a project to view tasks</h2>} />
                        <Route path="/projects/:projectId" element={<ProjectDetails filteredTasks={filteredTasks} />} />
                        <Route path="/projects/edit/:projectId" element={<EditProject />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};
export default App;