import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AddTask from './AddTask';
import Projects from './Projects';
import TaskList from './TaskList';
import AddProject from './AddProject';

const Home = () => 
{
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [projects, setProjects] = useState([]);
    const handleProjectSelect = (projectId) => 
    {
        setSelectedProjectId(projectId);
    };
    const handleTaskAdded = (newTask) => 
    {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };
    const handleAddProject = (newProject) => 
    {
        setProjects((prevProjects) => [...prevProjects, newProject]);
    };
    return (
        <div>
            <h1>Менеджер справ</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/tasks">Список справ</Link>
                    </li>
                    <li>
                        <Link to="/add-task">Додати справу</Link>
                    </li>
                    <li>
                        <Link to="/projects">Проекти</Link>
                    </li>
                    <li>
                        <Link to="/add-project">Додати проект</Link>
                    </li>
                </ul>
            </nav>
            <AddProject onAddProject={handleAddProject} />
        </div>
    );
};
export default Home;